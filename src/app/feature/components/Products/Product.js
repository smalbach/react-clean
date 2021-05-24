import React, { Component } from "react";
import { connect } from "react-redux";
import { Col } from "react-bootstrap";
import { PlusLg } from "react-bootstrap-icons";
import * as cartActions from "../../../core/redux/cart/actions/cartActions";

const { addToCart } = cartActions;

class Product extends Component {
  addProduct = (product) => {
    this.props.addToCart(product);
  };

  renderProduct = () => {
    const products = this.props.productReducer.products.map((product, key) => (
      <Col md="auto" key={product.id}>
        <div className="box">
          <img src={product.image} height="170" />
          <i className="button-add" onClick={() => this.addProduct(product)}>
            {" "}
            <PlusLg />{" "}
          </i>
          <h2> {product.name} </h2>
          <p>$ {product.price} </p>
        </div>
      </Col>
    ));
    return products;
  };
  render() {
    return <>{this.renderProduct()}</>;
  }
}

const mapStateToProps = ({ productReducer, cartReducer }) => {
  return { productReducer, cartReducer };
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
