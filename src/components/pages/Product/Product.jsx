import React from "react";
import "../../pages/Product/Product.css";
import cardimg1 from "../../../img/Image33.png";
import cardimg2 from "../../../img/Image34.png";
import cardimg3 from "../../../img/Image35.png";
function Product() {
  return (
    <div className="product_bg">
      <div className="continer">
        <div className="products">
          <h1>Latest Blog & News</h1>
          <div className="cards">
            <div className="card">
              <div className="card_img">
                <img src={cardimg1} alt="" />
              </div>
              <div className="card_text">
                <h2>
                  Why you have to digitalize in <br /> 2021
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Curabitur sit amet eros <br /> blandit, hendrerit elit
                  et.
                </p>
                <p className="p_product">Learn More --></p>
              </div>
            </div>
            <div className="card">
              <div className="card_img">
                <img src={cardimg2} alt="" />
              </div>
              <div className="card_text">
                <h2>
                  Our internal process and <br /> longerm vision
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Curabitur sit amet eros <br /> blandit, hendrerit elit
                  et.
                </p>
                <p className="p_product">Learn More --></p>
              </div>
            </div>
            <div className="card">
              <div className="card_img">
                <img src={cardimg3} alt="" />
              </div>
              <div className="card_text">
                <h2>
                  Helping the next generation <br /> of leaders
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Curabitur sit amet eros <br /> blandit, hendrerit elit
                  et.
                </p>
                <p className="p_product">Learn More --></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
