const smartMerge = require('webpack-merge').smart;
const base       = require('./webpack.config.base.js');

module.exports = smartMerge(base, {
  devtool: 'eval'
});
