import React, { useState } from "react";
import "../styles/Checkoutcard.css";
import med9 from "../images/tablet.jpg";
import { FaTrash } from "react-icons/fa";
import Quantity from "../components/Quantity";

const Checkoutcard = () => {
  return (
    <div className="allproduct">
      <div className="smallimg">
        <img src={med9} />
      </div>
      <div className="checktext">
        <div className="proname">Product Name</div>
        <div className="mfr">Manufacturer</div>
        <div className="price">Rs 487</div>
        <div className="discount">Save Rs 107</div>
        <div className="delivery">Delivery between JUNE 23-JUNE 24</div>
      </div>
      <div className="qty">
        <div className="bin">
          <FaTrash />
        </div>
        <div className="addmore">
          <div className="addqty">
            <div className="addqtytxt">QTY </div>
            <div>
              <Quantity initialQuantity={1} />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkoutcard;
