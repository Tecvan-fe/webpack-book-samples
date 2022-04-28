const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: false,
  profile: true,
  resolve: {
    extensions: [".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
