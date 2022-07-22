const path = require("path");

module.exports = {
  entry: { index: "./src/index.js" },
  mode: "development",
  devtool: false,
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  performance: {
    maxAssetSize: 172 * 1024,
    hints: "error",
  },
};
