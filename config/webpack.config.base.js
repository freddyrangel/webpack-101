const { resolve }                 = require('path');
const webpack                     = require('webpack');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const sourceDir                   = resolve('js');

module.exports = {
  context: sourceDir,
  entry: './entry.jsx',
  output: {
    path: resolve('build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{ loader: 'babel-loader' }],
        include: [resolve('js')]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      classNames: 'classnames'
    }),
  ],
  resolve: {
    modules: [sourceDir, 'node_modules'],
    extensions: ['.js', '.jsx', '*'],
    plugins: [
      new DirectoryNamedWebpackPlugin({
        honorIndex: true,
        exclude: /node_modules/,
        include: [sourceDir],
      })
    ]
  }
};
