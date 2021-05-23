import React, { useContext } from "react";

import ListProducts from "../Products/ListProducts";
import Cart from "../Cart/Cart";
import Total from "../Total";
import Checkout from "../Checkout";
import { Row, Col, Button } from "react-bootstrap";
import Loader from "react-loader-spinner";
import "./style.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Shopping = (props) => {
  /*   const cartContext = useContext(CartContext);
  const { chekout, order_saved, newOrderfn } = cartContext; */

  const chekout = false;
  const order_saved = null;
  const newOrder = () => {
    /* newOrderfn(); */
  };

  return (
    <>
      <h1 data-testid="app-name">Orders</h1>
      <Row>
        <Col sm={6}>
          {" "}
          <div id="product">
            <ListProducts />
          </div>
        </Col>
        <Col sm={6}>
          {order_saved ? (
            <>
              <div role="alert" class="fade alert alert-success show">
                Your order has been generated.
              </div>
              <Button variant="outline-primary" onClick={newOrder}>
                New order
              </Button>{" "}
            </>
          ) : (
            <div id="cart">
              {chekout ? (
                <>
                  <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={0} //3 secs
                  />
                </>
              ) : (
                <>
                  <Cart />

                  <Total />
                  <Checkout />
                </>
              )}
            </div>
          )}
        </Col>
      </Row>
    </>
  );
};

export default Shopping;
