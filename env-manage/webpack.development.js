const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.common");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: { hot: true },
});
