import React, { useContext } from "react";
import CartContext from "../../../core/redux/cart/cartContext";

import { Col } from "react-bootstrap";
import { PlusLg } from "react-bootstrap-icons";

const Product = ({ product }) => {
  const cartContext = useContext(CartContext);
  const { addToCartfn } = cartContext;

  const addProduct = () => {
    addToCartfn(product);
  };

  return (
    <>
      <Col md="auto">
        <div className="box">
          <img src={product.image} height="170" />
          <i onClick={addProduct}>
            {" "}
            <PlusLg />{" "}
          </i>
          <h2> {product.name} </h2>
          <p>$ {product.price} </p>
        </div>
      </Col>
    </>
  );
};

export default Product;
