const { resolve }       = require('path');
const targetDirecory    = resolve('build');
const smartMerge        = require('webpack-merge').smart;
const base              = require('./webpack.config.base.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = smartMerge(base, {
  output: {
    path: targetDirecory,
    filename: '[name].[chunkhash].js',
    publicPath: '/build/'
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin('style.[chunkhash].css')
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'resolve-url-loader']
        })
      }
    ]
  }
});
