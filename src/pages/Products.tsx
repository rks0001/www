import React from "react";
import "../styles/Products.css";
import tablet from "../images/tablet.jpg";
import Carousel from "../components/Carousel";
import Checkoutcard from "./Checkoutcard";

const Products = () => {
  const styles = {};
  return (
    <div className="prosec">
      <div className="productcon">
        <div className="imgcon">
          <Carousel medimg={tablet} />
        </div>
        <div className="textcon">
          <div className="proname"> Products Name</div>
          <div className="tags"> tags </div>
          <div className="rating">(4 Ratings and 4 Reviews)</div>
          <div className="bestpricecon">
            <div className="bestprice">Best Price</div>
            <div className="displayprice">Rs 127</div>
          </div>
          <div className="mrpcon">
            <div className="mrp"> MRP Rs 150</div>
            <div className="off"> GET 17% percent off</div>
          </div>

          <div className="info">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            amet asperiores inventore exercitationem totam, aspernatur
            repellendus numquam reiciendis. Architecto aspernatur ab provident
            vitae fugiat quia delectus esse cupiditate, modi explicabo.
          </div>
          <button className="addtocart">ADD TO CART</button>
          <div className="expiry">Availability & Expiry</div>
        </div>
      </div>
      <Checkoutcard />
    </div>
  );
};

export default Products;
