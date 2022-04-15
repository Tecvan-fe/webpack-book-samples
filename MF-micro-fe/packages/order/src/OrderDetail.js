import React from "react";
import { useParams } from "react-router-dom";

const style = {
  height: 400,
  backgroundColor: "#3f51b5",
  color: "white",
  padding: 12,
};

const OrderDetail = () => {
  const params = useParams();

  return (
    <div style={style}>
      <h1>Order Detail Page</h1>
      <p>Detail about {params.orderId}</p>
    </div>
  );
};

export default OrderDetail;
