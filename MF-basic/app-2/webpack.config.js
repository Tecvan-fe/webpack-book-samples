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
    new ModuleFederationPlugin({
      remotes: {
        app1: "app1@http://localhost:8081/dist/remoteEntry.js", //cdn地址
      },
    }),
    new HtmlWebpackPlugin(),
  ],
  devServer: {
    port: 8082,
    hot: true,
    open: true,
  },
};
