const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: false,
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    hot: true,
    open: true,
  },
  module: {
    rules: [
      { test: /\.pug$/, use: ["pug-plain-loader"] },
      { test: /\.vue$/, use: ["vue-loader"] },
      { test: /\.ts$/, use: ["ts-loader"] },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      templateContent: `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Webpack App</title>
  </head>
  <body>
    <div id="app" />
  </body>
</html>
    `,
    }),
  ],
};
