const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');
const webpack = require('webpack')

module.exports = merge(base, {
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'inline-source-map',
  module:{
    rules:[
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: './build',
    inline: true,
    open: true,
    port: 8082,
    hot: true
  },
})