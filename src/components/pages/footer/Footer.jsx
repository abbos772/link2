import React from "react";
import "../footer/Footer.css";
import logo from "../../../img/Logo4.png";
import solical from "../../../img/Social.png";
function Footer() {
  return (
    <div>
      <div className="footer_bg">
        <div className="continer">
          <div className="footer">
            <div className="foot">
              <img src={logo} alt="" width={120} />
              <h1>
                Bespoke software <br /> solutions
              </h1>
              <img src={solical} alt="" width={136} />
              <p>© All rights reserved – Finsweet</p>
            </div>
            <div className="foot">
              <h4>Company</h4>
              <h4>About Us</h4>
              <h4>Careers</h4>
              <h4>Services</h4>
              <h4>Blog</h4>
            </div>
            <div className="foot">
              <h4>Connect</h4>
              <h4>hi@finsweet.com</h4>
              <h4>+(123) 456-7890</h4>
            </div>
            <div className="foot">
              <h4>Join Newsletter</h4>
              <div className="search">
                <p>Type email here</p>
              </div>
              <button className="btn_footer">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
