const path = require("path");
const { merge } = require("webpack-merge");

const baseConfig = {
  mode: "development",
  target: "web",
  devtool: false,
  entry: {
    main: { import: "./src/index.js" },
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, "dist"),
  },
};

module.exports = [
  merge(baseConfig, { target: "web", output: { filename: "web-[name].js" } }),
  merge(baseConfig, { target: "node", output: { filename: "node-[name].js" } }),
];
