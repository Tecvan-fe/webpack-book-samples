import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<App />, document.getElementById("root"));

// (async () => {
//     const orderRoutes = await import("order/routes");

//     const routes = [...localRoutes, ...orderRoutes];

//     ReactDOM.render(<App routes={routes} />, document.getElementById("root"));
//   })();
