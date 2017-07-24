const merge = require('webpack-merge').smart;
const base = require('./webpack.config.base.js');

module.exports = merge(base, {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css?$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'resolve-url-loader']
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin('style.css')]
});
