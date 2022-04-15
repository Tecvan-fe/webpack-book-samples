import { HashRouter, Route, Routes } from "react-router-dom";

import Navigation from "./Navigation";
import React from "react";
import localRoutes from "./routes";
import orderRoutes from "RemoteOrder/routes";

const routes = [...localRoutes, ...orderRoutes];

const App = () => (
  <React.StrictMode>
    <HashRouter>
      <div>
        <h1>Micro Frontend Example</h1>
        <Navigation />
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <React.Suspense fallback={<>...</>}>
                  <route.component />
                </React.Suspense>
              }
              exact={route.exact}
            />
          ))}
        </Routes>
      </div>
    </HashRouter>
  </React.StrictMode>
);

export default App;
