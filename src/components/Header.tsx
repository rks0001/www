import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import medlogo from "../images/logo3.png";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Button from "@material-ui/core/Button";
import ModalDialog from "./ModalDialog";

const Header = () => {
  const iconStyles = { color: "#fff", fontSize: "1.5em" };

  const [open, setOpen] = useState(false);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="mainsec">
      <nav className=" navbarmain navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div className="logo">
              <div>
                <Link to="/">
                  <img className="logoimg " src={medlogo} alt="Logo" />
                </Link>
              </div>

              <div className="logotxt">
                <Link to="/">
                  Aid 24x7
                  <br /> Pharmacy with Aim
                </Link>
              </div>
            </div>
          </a>

          <form className="searchform d-flex" role="search">
            <input
              className="form-control "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btnsearch" type="submit">
              Search
            </button>
          </form>

          <div className="cart">
            <FaShoppingCart style={iconStyles} />
            <span className="icontext">
              {" "}
              <Link to="/checkout">Cart</Link>
            </span>
          </div>
          <div>
            <Button className="signupbtn" onClick={handleOpen}>
              <CgProfile style={iconStyles} />
              <span className="icontext">Sign Up</span>
            </Button>
            <ModalDialog open={open} handleClose={handleClose} />
          </div>
        </div>
      </nav>
      {/* <div className="secondheader">
        <div className="medcareitems">
          <Link to="/allopathic">Allopathic Medicines</Link>
        </div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Ayurvedic Medicines</div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Generic Medicines</div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Mom & Baby</div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Diabetic Care</div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Pain Relief</div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Surgical and Dressing Items</div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Skin Care</div>
      </div>
      <div className="thirdheader">
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Hair Care</div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Sexual Wellness</div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Covid Essentials</div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Devices </div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Intimate Care & Hygiene</div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Home Care</div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Fitness & Supplements</div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Mobility and Support</div>
      </div> */}
    </div>
  );
};

export default Header;
