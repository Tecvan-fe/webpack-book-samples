const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const WebpackBaseConfig = require("./webpack.base.config");

const port = process.env.PORT || 8080;
const hot = ["react-hot-loader/patch"];

const entries = {
  home: hot.concat(path.join(__dirname, "./src/pages/home")),
  login: hot.concat(path.join(__dirname, "./src/pages/login")),
};
const htmlPlugins = Object.keys(entries).map(
  (k) =>
    new HtmlWebpackPlugin({
      title: `[${k}] My Awesome Electron App`,
      filename: `${k}.html`,
    })
);

module.exports = merge(WebpackBaseConfig, {
  entry: entries,
  target: "electron-renderer",
  devServer: { hot: true },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom", // 开发模式下
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
            plugins: [require("react-hot-loader/babel")],
          },
        },
      },
    ],
  },
  plugins: [...htmlPlugins],
});
