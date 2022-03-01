const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: './src/index',
  mode: 'development',
  devtool: false,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new ESLintPlugin()]
}
