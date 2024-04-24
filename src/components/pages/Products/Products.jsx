import React, { useState, useEffect } from "react";
import "../Products/Products.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import img from "../../../img/Image36.png";
import axios from "../api/Api";
import { Link } from "react-router-dom";
function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setData(res.data.products))
      .catch((res) => console.log(res));
  }, []);
  let single_products = data?.slice(0, 6).map((el) => (
    <Link to={`/Products/${el.id}`}>
      <div key={el.id} className="pr_card">
        <div className="card_img">
          <img src={el.images[0]} width={300} alt="" />
        </div>
        <div className="card_text">
          <h2>{el.description.slice(0, 50)}...</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Curabitur sit amet eros <br /> blandit, hendrerit elit et.
          </p>
          <p className="p_product">Learn More --></p>
        </div>
      </div>
    </Link>
  ));
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
              <p className="p_product">Learn More --</p>
            </div>
            <div className="blog_img">
              <img className="rasm" src={img} alt="" width={650} />
            </div>
          </div>
        </div>
      </div>
      <div className="continer">
        <div className="products">
          <h1>Latest Blog & News</h1>
          <div className="cards">{single_products}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Products;
