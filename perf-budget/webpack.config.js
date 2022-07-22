const path = require("path");

module.exports = {
  entry: { index: "./src/index.js", foo: "./src/foo" },
  mode: "development",
  devtool: false,
  output: {
    filename: "[name]-[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  performance: {
    maxAssetSize: 172 * 1024,
    maxEntrypointSize: 170 * 1024,
    hints: "error",
  },
};
