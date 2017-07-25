const webpack                     = require('webpack');
const { resolve }                 = require('path');
const sourceDirectory             = resolve('js');
const targetDirecory              = resolve('build');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = {
  context: sourceDirectory,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [sourceDirectory],
        use: [{ loader: 'babel-loader' }]
      }
    ]
  },
  entry: {
    app: './entry.jsx',
    vendor: [
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
    new webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'manifest'] }),
  ],
  resolve: {
    modules: [sourceDirectory, 'node_modules'],
    extensions: ['.js', '.jsx', '*'],
    plugins: [
      new DirectoryNamedWebpackPlugin({
        honorIndex: true,
        include: [sourceDirectory],
      })
    ]
  }
};
