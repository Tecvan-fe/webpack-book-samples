const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: false,
  entry: { foo: "./src/index.js" },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      // Webpack5 之后，约定使用 `'...'` 字面量保留默认 `minimizer` 配置
      "...",
      new HtmlMinimizerPlugin({
        minimizerOptions: {
          // 折叠 Boolean 型属性
          collapseBooleanAttributes: true,
          // 使用精简 `doctype` 定义
          useShortDoctype: true,
          // ...
        },
      }),
    ],
  },
  plugins: [
    // 简单起见，这里我们使用 `html-webpack-plugin` 自动生成 HTML 演示文件
    new HtmlWebpackPlugin({
      templateContent: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>webpack App</title>
      </head>
      <body>
        <input readonly="readonly"/>
        <!-- comments -->
        <script src="index_bundle.js"></script>
      </body>
    </html>`,
    }),
  ],
};
