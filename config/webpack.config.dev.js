const { resolve }    = require('path');
const targetDirecory = resolve('build');
const smartMerge     = require('webpack-merge').smart;
const base           = require('./webpack.config.base.js');

module.exports = smartMerge(base, {
  output: {
    path: targetDirecory,
    filename: '[name].js',
    publicPath: '/build/'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader'
        ]
      }
    ]
  }
});
