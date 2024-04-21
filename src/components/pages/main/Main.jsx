import React from "react";
import Navbar from "../Navbar/Navbar";
import Product from "../Product/Product";
import Footer from "../footer/Footer";
import svg1 from "../../../img/Logo1.png";
import svg2 from "../../../img/Logo2.png";
import svg3 from "../../../img/Logo3.png";
import man from "../../../img/Image12.png";
import "../main/Main.css";
const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="continer">
          <div className="home__man">
            <div className="home__text">
              <h1>
                Prosper with our <br /> bespoke solutions
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                Suspendisse varius enim in eros elementum tristique
              </p>
              <div className="btn_flex">
                <button className="btn_home">See our services</button>
                <h4>See All Services </h4>
              </div>
              <div className="home_mini_text">
                <p>Worked with 100+ Companies</p>
                <div className="home_svgs">
                  <img src={svg1} alt="" />
                  <img src={svg2} alt="" />
                  <img src={svg3} alt="" />
                </div>
              </div>
            </div>
            <div className="home__img">
              <img className="rasm" src={man} alt="" width={818} />
            </div>
          </div>
          <Product />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Main;
