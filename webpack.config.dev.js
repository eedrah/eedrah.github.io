var merge = require('merge-and-concat')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = require('./webpack.config.js')

module.exports = merge({}, config, {
  output: {
    pathinfo: true
  },
  debug: true,
  devtool: 'inline-source-map',
  watchOptions: {
    aggregateTimeout: 100
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Eedrah',
      filename: 'index.html',
      inject: false,
      template: 'node_modules/html-webpack-template/index.ejs',
      baseHref: '/'
    })
  ]
})
