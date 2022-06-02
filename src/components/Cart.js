import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addCart,delCart } from "../redux/actions";

const Cart = () => {
  const dispatch = useDispatch();

  const handleButton = (product) => {
    dispatch( addCart(product));
   
    console.log(handleButton);
  };
  const handleClick=(product)=>{
    dispatch( delCart(product));
   
  }

  const cart = useSelector((state) => state.handleCart);

  return (
    <div className="container">
      <div className="row">
        {cart.map((product) => (
          <div key={product.id} className="product-card col-6">
            {/* <div>
            <img src={product.image} alt="#" className="product-img" />
          </div>
          <div className="product-description">
            <h6>{product.title}</h6>
            <h6> ${product.price}</h6>
            <h6> {product.category}</h6>
          </div> */}

            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <img
                    src={product.image}
                    alt={product.title}
                    height="200px"
                    width="180px"
                  />
                </div>
                <div className="col-md">
                  <h3>{product.title}</h3>
                  <p className="lead fw-bold">
                    {product.qty} X ${product.price}= $
                    {product.qty * product.price}
                  </p>
                  <button
                    className="btn btn-outline-dark me-4"
                    onClick={() => handleClick(product)}
                  >
                    <i className="fa fa-minus"></i>
                  </button>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => handleButton(product)}
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cart;
