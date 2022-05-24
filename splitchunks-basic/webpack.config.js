const path = require("path");

module.exports = {
  mode: "development",
  devtool: false,
  entry: {
    entry1: "./src/entry-a.js",
    entry2: "./src/entry-b.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      minChunks: 2,
      chunks: "all",
      minSize: 1,
    },
  },
};
