const path = require("path");
const { merge } = require("webpack-merge");
const WebpackBaseConfig = require("./webpack.base.config");
const nodeExternals = require("webpack-node-externals");
// 用于实现自动重载
const ElectronReloadPlugin = require("webpack-electron-reload")({
  path: path.join(__dirname, "./dist/main.js"),
});

module.exports = merge(WebpackBaseConfig, {
  target: "electron-main",
  entry: {
    main: path.join(__dirname, "./src/main"),
  },
  module: {
    rules: [],
  },
  // plugins: [ElectronReloadPlugin()],
  externals: [nodeExternals()],
});
