import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const root = document.createElement("div");

ReactDOM.render(
  <>
    <h1>Hello, world!</h1>
    <App />
  </>,
  root
);

document.body.append(root);
