var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './eedrah.github.io-source/index.js',
  output: {
    path: './',
    filename: 'bundle.js',
    publicPath: undefined
  },
  loaders: [
    {
      test: /\.jsx?/,
      loaders: [ 'babel' ],
      include: 'index.js',
      query: { presets: [ 'es2015' ] }
    },
    {
      test: /\.css$/,
      loaders: [ 'style', 'css', 'postcss' ]
    },
    {
      test: /\.(png|jpg)$/,
      loaders: [ 'url' ],
      query: { limit: 8192 }
    }
  ],
  plugins: [new HtmlWebpackPlugin({
    title: 'Eedrah',
    filename: '404.html'
  })]
}
