const path    = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve('js'),
  output: {
    path: path.resolve('build'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve('js')],
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader'
        ]
      }
    ]
  },
  entry: {
    app: './app.jsx',
    vendor: [
      'todomvc-common/base.js',
      'todomvc-common/base.css',
      'todomvc-app-css/index.css',
      'react',
      'director/build/director.js',
      'classnames'
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      classNames: 'classnames'
    }),
    new htmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    })
  ]
};
