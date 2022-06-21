const path = require("path");
const BlockPlugin = require("./BlockPlugin");

module.exports = {
  mode: "development",
  devtool: false,
  entry: { main: "./src/index.js" },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new BlockPlugin()],
};
