import React from "react";

import ListProducts from "../Products/ListProducts";
import Cart from "../Cart/Cart";
import Total from "../Total";
import Checkout from "../Checkout";
import { Row, Col, Button } from "react-bootstrap";
import Loader from "react-loader-spinner";
import Layout from "../../../shared/Layout";
import "./style.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Shopping = (props) => {
  return (
    <>
      <Layout>
        <Row>
          <Col sm={6}>
            {" "}
            <div id="product">
              <ListProducts />
            </div>
          </Col>
          <Col sm={6}>
            <div id="cart">
              <>
                <Cart />

                <Total />
                <Checkout />
              </>
            </div>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default Shopping;
