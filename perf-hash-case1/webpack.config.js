const path = require("path");

module.exports = {
  entry: { index: "./src/index.js" },
  mode: "development",
  devtool: false,
  output: {
    filename: "[name]-[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  // optimization: { runtimeChunk: { name: "runtime" } },
};
