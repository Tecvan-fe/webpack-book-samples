const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: false,
  output: { path: path.join(__dirname, "dist"), filename: "[name].js" },
};
