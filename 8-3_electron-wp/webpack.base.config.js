const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  devtool: false,
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist"),
  },
};
