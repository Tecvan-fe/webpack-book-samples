const path = require("path");

module.exports = {
  output: {
    path: path.join(__dirname, "./dist"),
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        }
      }
    ],
  },
};
