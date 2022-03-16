const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: false,
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist"),
  },
};
