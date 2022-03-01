const Merge = require("webpack-merge");
const path = require("path");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const base = require("./webpack.base");

module.exports = Merge.merge(base, {
  entry: {
    server: path.join(__dirname, "src/entry-server.js"),
  },
  target: "node",
  output: {
    // 打包后的结果会在 node 环境使用
    // 因此此处将模块化语句转译为 commonjs 形式
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 注意，这里用 `vue-style-loader` 而不是 `style-loader`
          // 因为 `vue-style-loader` 对 SSR 模式更友好
          "vue-style-loader",
          {
            loader: "css-loader",
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // 这里使用 webpack-manifest-plugin 记录产物分布情况
    // 方面后续在 `server.js` 中使用
    new WebpackManifestPlugin({ fileName: "manifest-server.json" }),
  ],
});
