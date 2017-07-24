const merge = require('webpack-merge').smart;
const base = require('./webpack.config.base.js');

module.exports = merge(base, {
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: 'null-loader'
      }
    ]
  }
});
