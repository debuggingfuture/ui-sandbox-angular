var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
module.exports = {
  entry: {
    'app':'index.js',
    'vendors': [
      'angular', 'lodash'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.(woff(2)?|eot|svg|ttf)$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" }
    ]
  },
  externals: {
    // if we do CDN
    // 'angular': 'angular'
  },
  resolve: {
    root: [__dirname],
    extensions: ['', '.js']
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Sandbox',
    template: 'index.ejs', // Load a custom template
    // inject: 'body' // Inject all scripts into the body
  })],
  devtool:"eval"
}
