const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  devtool: false,
  entry: path.resolve(__dirname, "./src/main.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
  },
  plugins: [
    // 模块使用方也依然使用 ModuleFederationPlugin 插件搭建 MF 环境
    new ModuleFederationPlugin({
      // 使用 remotes 属性声明远程模块列表
      remotes: {
        // 地址需要指向导出方生成的应用入口文件
        RemoteApp: "app1@http://localhost:8081/dist/remoteEntry.js",
      },
      exposes: {},
      shared: { lodash: {} },
    }),
    new HtmlWebpackPlugin(),
  ],
  devServer: {
    port: 8082,
    hot: true,
    open: true,
  },
};
