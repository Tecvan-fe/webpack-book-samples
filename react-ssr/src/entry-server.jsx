import React from 'react'
import express from 'express';
import App from './App'
import { renderToString } from 'react-dom/server';


// 通过 manifest 文件，找到正确的产物路径
const clientManifest = require("../dist/manifest-client.json");

const server = express();

server.get("/", (req, res) => {

  const html = renderToString(<App/>);

  const clientCss = clientManifest["client.css"];
  const clientBundle = clientManifest["client.js"];

  res.send(`
<!DOCTYPE html>
<html>
    <head>
      <title>React SSR Example</title>
      <link rel="stylesheet" href="${clientCss}"></link>
    </head>
    <body>
      <!-- 注入组件运行结果 -->
      <div id="app">${html}</div>
      <!-- 注入客户端代码产物路径 -->
      <!-- 实现 Hydrate 效果 -->
      <script src="${clientBundle}"></script>
    </body>
</html>
    `);
});

server.use(express.static("./dist"));

server.listen(3000, () => {
  console.log("ready");
});
