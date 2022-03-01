const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devtool: false,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-typescript'] }
        }
      }
    ]
  },
  plugins: [new ESLintPlugin({ extensions: ['.js', '.ts'] })]
}
