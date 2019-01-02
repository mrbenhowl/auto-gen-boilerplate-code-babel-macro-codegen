const path = require('path')

const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

module.exports = {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    globalObject: 'self'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      { test: /\.svg$/, loader: 'svg-url-loader?prefix=svg/' },
      {
        test: /majorMonoDisplayRegular\.ttf$/,
        loader: 'url-loader?prefix=fonts/'
      },
      { test: /robotoLight\.ttf$/, loader: 'file-loader?prefix=fonts/' }
    ]
  },
  plugins: [new CleanPlugin(['dist']), htmlPlugin]
}
