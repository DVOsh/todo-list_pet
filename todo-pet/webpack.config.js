const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './source/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[chunkhash].js'
  },
  devServer: {
    port: 3000
  },
  module: {
    rules: [{
      test: /\.(s*)css$/,
      use: [
        miniCss.loader,
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new miniCss({
      filename: './css/style.css'
    }),
    new HTMLPlugin({
      template: './source/html/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}