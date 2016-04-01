module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist/',
    filename: 'bundle.js',
    chunkFilename: '[name]/chunk.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel',
        exclude: /node_modules/,
        query: { presets: [ 'es2015', 'react' ] }
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
    ]
  },
  progress: true
}
