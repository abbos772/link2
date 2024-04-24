import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import axios from "../api/Api";
import Footer from "../footer/Footer";
import "../Single/Single.css";
function Single() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((res) => console.log(res));
  }, []);
  if (!product) {
    return <h1 className="loading">Loading...</h1>;
  }
  return (
    <div>
      <div className="continer">
        <Navbar />
        <div className="single">
          <img src={product?.images[0]} width={500} alt="" />
          <div className="single_text">
            <h3 style={{ color: "red" }}>{product?.brand}</h3>
            <div className="mode">
              <h1>{product?.title}</h1>
              <div className="ray">
                <h4 style={{ color: "red" }}>{product?.price}$</h4>
                <h4>({product?.rating})</h4>
              </div>
            </div>
            <p>{product?.description}</p>
          </div>
          <button className="buy1">buy</button>
          <div className="lorem_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            voluptatibus est eum sequi eveniet esse, earum numquam aperiam
            explicabo hic quidem incidunt odio. Sint, beatae! Eius, atque
            corporis. Quod necessitatibus, accusamus ea nam illo labore vitae,
            recusandae magnam molestiae, vero consequatur debitis id quo
            delectus? Quia fugiat neque rerum magni quis nobis doloremque veniam
            soluta, fuga, voluptate tenetur possimus laudantium laboriosam nam
            eligendi assumenda culpa in officia beatae accusamus corporis natus.
            Vero ea fugiat veniam atque repellendus dolore rerum velit porro
            blanditiis doloribus? Laboriosam excepturi praesentium fuga iste,
            magni asperiores provident quasi, mollitia nam ipsa esse
            necessitatibus deserunt odit. Quam.
          </div>
          <div className="lorem_t">
            <h1>
              Transform Your Idea Into Reality with Ether a Leading Digital{" "}
              Agency
            </h1>
          </div>
          <div className="lorem_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            voluptatibus est eum sequi eveniet esse, earum numquam aperiam
            explicabo hic quidem incidunt odio. Sint, beatae! Eius, atque
            corporis. Quod necessitatibus, accusamus ea nam illo labore vitae,
            recusandae magnam molestiae, vero consequatur debitis id quo
            delectus? Quia fugiat neque rerum magni quis nobis doloremque veniam
            soluta, fuga, voluptate tenetur possimus laudantium laboriosam nam
            eligendi assumenda culpa in officia beatae accusamus corporis natus.
            Vero ea fugiat veniam atque repellendus dolore rerum velit porro
            blanditiis doloribus? Laboriosam excepturi praesentium fuga iste,
            magni asperiores provident quasi, mollitia nam ipsa esse
            necessitatibus deserunt odit. Quam.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Single;
