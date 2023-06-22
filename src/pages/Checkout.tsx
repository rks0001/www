import React from "react";
import Checkoutcard from "./Checkoutcard";
import "../styles/Checkout.css";
import Payment from "../components/Payment";

const Checkout = () => {
  return (
    <div className="sctn_main">
      <div className="showproducts">
        <div className="toptxt"> PRODUCTS</div>
        <Checkoutcard />
        <Checkoutcard />
        <Checkoutcard />
      </div>
      <div className="payment">
        <Payment />
      </div>
    </div>
  );
};

export default Checkout;
