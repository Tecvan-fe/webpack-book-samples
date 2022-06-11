const path = require("path");

module.exports = {
  mode: "development",
  devtool: false,
  entry: {
    main: "./src/index.js",
    foo: { import: "./src/foo.js", dependOn: "main" },
  },
  output: {
    clean: true,
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};
