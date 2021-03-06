const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');

module.exports = merge(base, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    open: true,
    port: 8082
  },
})