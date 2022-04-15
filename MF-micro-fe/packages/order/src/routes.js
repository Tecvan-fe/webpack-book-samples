import React from "react";

const OrderListPage = React.lazy(() => import("./OrderList"));
const OrderDetailPage = React.lazy(() => import("./OrderDetail"));

const routes = [
  { path: "/order", component: OrderListPage },
  { path: "/order/:orderId", component: OrderDetailPage },
];

export default routes;
