const webpack                     = require('webpack');
const { resolve }                 = require('path');
const sourceDirectory             = resolve('js');
const targetDirecory              = resolve('build');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = {
  context: sourceDirectory,
  output: {
    path: targetDirecory,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [sourceDirectory],
        use: [{ loader: 'babel-loader' }]
      }
    ]
  },
  entry: './entry.jsx',
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      classNames: 'classnames'
    })
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
