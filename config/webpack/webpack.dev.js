const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const shared = require('./webpack.shared');

const rootDir = path.dirname(path.dirname(__dirname));

const dev = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    publicPath: '/',
    historyApiFallback: true
  },
  output: {
    filename: 'bundle.js',
    path: path.join(rootDir, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = merge(shared, dev);