const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const rootPath = process.cwd()
const distPath = path.join(rootPath, 'dist')
const srcPath = path.join(rootPath, 'src')

const config = {
  entry: path.join(srcPath, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: distPath,
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(rootPath, 'index.html'),
      filename: 'index.html',
      inject: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.join(rootPath, 'external'),      to: path.join(distPath, 'external'),      noErrorOnMissing: true },
        { from: path.join(rootPath, 'models'),        to: path.join(distPath, 'models'),        noErrorOnMissing: true },
        { from: path.join(rootPath, 'image-targets'), to: path.join(distPath, 'image-targets'), noErrorOnMissing: true },
      ],
    }),
  ],
  mode: 'production',
  devServer: {
    open: false,
    compress: true,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
}

module.exports = config
