const path = require('path');

module.exports = {
  context: path.resolve('js'),
  output: {
    path: path.resolve('build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve('js')],
        use: [{ loader: 'babel-loader' }]
      }
    ]
  },
  entry: './app.jsx'
};
