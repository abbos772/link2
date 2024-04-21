import React from "react";
import "../about/About.css";
import "../Navbar/Navbar.css";
import Navbar from "../Navbar/Navbar";
import women from "../../../img/H2.png";
import Footer from "../footer/Footer";
import Product from "../Product/Product";
const About = () => {
  return (
    <div>
      <Navbar />
      <div className="continer">
        <div className="home__woman">
          <div className="home__textt">
            <h1>We hired people who are very passionate about what they do</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Suspendisse varius enim in eros elementum tristique
            </p>
            <div className="btn_flex">
              <button className="btn_home">Work With Us</button>
            </div>
          </div>
          <div className="home__img">
            <img className="rasm" src={women} alt="" />
          </div>
        </div>
      </div>
      <Product />
      <Footer />
    </div>
  );
};

export default About;
