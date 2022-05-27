import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState();

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setFilter(res.data);
      })

      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  const filterProduct = (cat) => {
    const updateCategory = data.filter((e) => e.category === cat);
    setFilter(updateCategory);
    console.log(filter);
  };
 

  return (
    <>
      <div>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12 mb-5">
              <h1 className="display-6 fw-bolder text-center">
                Latest Products
              </h1>
              <hr />
            </div>
          </div>
        </div>
      </div>

      <div className="buttons-search">
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => setFilter(data)}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("men's Clothing")}
        >
          Men's Clothing
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("women's Clothing")}
        >
          Women's Clothing
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("jewelery")}
        >
          Jewelery
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("electronic")}
        >
          Electronic
        </button>
      </div>

      <div className="products">
        {loading && (
          <div>
            {" "}
            <h1>Loading...</h1>
          </div>
        )};
      

       
        {data.map((product) => (
          <div key={product.id} className="product-card">
            <div>
              <img src={product.image} alt="#" className="product-img" />
            </div>
            <div className="product-description">
              <h6>{product.title}</h6>
              <h6> ${product.price}</h6>
              <h6> {product.category}</h6>
              <Link to={`/products/${product.id}`} className="btn btn-primary">
                Buy Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
