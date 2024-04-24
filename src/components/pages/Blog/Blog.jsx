import React from "react";
import "../Blog/Blog.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import img from "../../../img/Image36.png";
function Blog() {
  return (
    <div>
      <Navbar />
      <div className="blog ">
        <div className="continer">
          <div className="blog_flex">
            <div className="blog_text">
              <h1>
                Our internal <br /> process and <br /> longerm vision
              </h1>
              <p>
                It is a long established fact that a reader will be distracted{" "}
                <br />
                by the readable content of a page when looking at its layout.{" "}
                <br />
                The Maker is a decentralized. We aim to attain the
              </p>
              <p className="p_product">Learn More --></p>
            </div>
            <div className="blog_img">
              <img className="rasm" src={img} alt="" width={650} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
