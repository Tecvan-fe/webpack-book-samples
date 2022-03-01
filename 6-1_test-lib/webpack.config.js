const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist"),
    library: {
      name: "_",
      type: "umd",
    },
  },
  externals: {
    lodash: {
      commonjs: "lodash",
      commonjs2: "lodash",
      amd: "lodash",
      root: "_",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
