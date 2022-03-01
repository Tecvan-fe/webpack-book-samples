const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.join(__dirname, "./dist"),
  },
  module: {
    rules: [
      { test: /.vue$/, use: "vue-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  plugins: [
    new PrerenderSPAPlugin({
      // 必要参数
      // 指定 SSG 产物路径
      staticDir: path.join(__dirname, "dist"),
      // 必要参数
      // 指定需要生成静态页面的路由
      routes: ["/", "/about", "/contact"],
    }),
    new VueLoaderPlugin(),
    // 自动生成 HTML 文件内容
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
