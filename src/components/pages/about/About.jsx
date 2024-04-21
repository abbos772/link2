import React from "react";
import "../about/About.css";
import "../Navbar/Navbar.css";
import Navbar from "../Navbar/Navbar";
import women from "../../../img/women.png";
import Footer from "../footer/Footer";
import Product from "../Product/Product";
const About = () => {
  return (
    <div>
      <Navbar />
      <div className="continer">
        <div className="home__woman">
          <div className="home__textt">
            <h1>
              We value human, <br /> organizational, <br /> and operational{" "}
              <br />
              intelligence, not <br /> just artificial
            </h1>
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
        <div className="energy">
          <h2>
            The energy of a start-up <br /> combined with 30 years of <br />{" "}
            experience
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit <br /> amet eros blandit, hendrerit elit et, mattis purus.
            Vivamus <br /> commodo suscipit tellus et pellentesque.
          </p>
        </div>
        <div className="carts">
          <div className="cart">
            <b>15+</b>
            <h3>Awards received</h3>
            <p>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscin.
              Curabitur <br /> sit amet eros elit et.
            </p>
          </div>
          <div className="cart">
            <b>500+</b>
            <h3>Clients served</h3>
            <p>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscin.
              Curabitur <br /> sit amet eros elit et.
            </p>
          </div>
          <div className="cart">
            <b>34</b>
            <h3>Employees</h3>
            <p>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscin.
              Curabitur <br /> sit amet eros elit et.
            </p>
          </div>
          <div className="cart">
            <b>130+</b>
            <h3>Custom solutions</h3>
            <p>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscin.
              Curabitur <br /> sit amet eros elit et.
            </p>
          </div>
        </div>
      </div>
      <Product />
      <Footer />
    </div>
  );
};

export default About;
