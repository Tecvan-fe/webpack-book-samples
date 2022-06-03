const path = require("path");

module.exports = {
  mode: "development",
  devtool: false,
  entry: { main: "./src/index.js" },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  // infrastructureLogging: {
  //   level: 'none',
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, "../dist/index.js"),
          },
        ],
      },
    ],
  },
};
