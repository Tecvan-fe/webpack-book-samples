const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SpritesmithPlugin = require('webpack-spritesmith')

module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/index.jsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env'],
            ['@babel/preset-react']
          ]
        }
      }]
    }, {
      test: /\.less$/i,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
    }, {
      test: /\.svg$/i,
      use: ['svg-url-loader']
    }, {
      test: /\.(png|jpg)$/,
      type: "asset/resource",
      use: [{
        loader: 'image-webpack-loader',

        options: {
          disable: true,
          mozjpeg: {
            quality: 10
          },
        }
      }]
    }],
  },
  resolve: {
    modules: ["node_modules", "assets"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `<div id="root" ><div id="header"></div>`
    }),
    new MiniCssExtractPlugin(),
    new SpritesmithPlugin({
      src: {
        cwd: path.resolve(__dirname, 'src/icons'),
        glob: '*.png'
      },
      target: {
        image: path.resolve(__dirname, 'src/assets/sprite.png'),
        css: path.resolve(__dirname, 'src/assets/sprite.less')
      },
      apiOptions: {
        cssImageRef: "~sprite.png"
      }
    })
  ]
};