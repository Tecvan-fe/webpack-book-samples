import React from "react";
import { Link } from "react-router-dom";

const style = {
  height: 400,
  backgroundColor: "#ddd",
  color: "#000",
  padding: 12,
};

const OrderList = () => (
  <div style={style}>
    <h1>Order List Page</h1>
    <div>
      <Link
        style={{ display: "block", margin: "1rem 0" }}
        to={"/order/foo-123"}
      >
        Goto Order Detail
      </Link>
    </div>
  </div>
);

export default OrderList;
