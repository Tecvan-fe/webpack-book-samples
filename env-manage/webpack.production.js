const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.common");

module.exports = merge(baseConfig, {
  mode: "production",
  devtool: "cheap-source-map",
});
