const { resolve }     = require('path');
const sourceDirectory = resolve('js')
const targetDirecory  = resolve('build')

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
  entry: './app.jsx',
  devtool: 'source-map'
};
