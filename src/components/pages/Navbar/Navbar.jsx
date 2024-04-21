import React from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../../img/Logo@1x.png";
function Navbar() {
  return (
    <div className="continer">
      <div className="navbar">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link to={"/about"}>About Us</Link>
          <Link to={"/Careers"}>Careers</Link>
          <Link to={"/login"}>Services</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/login"}>Contact Us</Link>
          <button className="btn_nav">Clone project</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
