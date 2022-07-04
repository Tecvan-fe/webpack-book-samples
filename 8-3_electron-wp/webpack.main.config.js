const path = require("path");
const { merge } = require("webpack-merge");
const WebpackBaseConfig = require("./webpack.base.config");
const nodeExternals = require("webpack-node-externals");

module.exports = merge(WebpackBaseConfig, {
  target: "electron-main",
  entry: {
    main: path.join(__dirname, "./src/main"),
  },
  module: {
    rules: [],
  },
  externals: [nodeExternals()],
});
