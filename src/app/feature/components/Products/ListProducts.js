import React, { Component } from "react";
import { connect } from "react-redux";
import { Row } from "react-bootstrap";
import * as productsActions from "../../../core/redux/product/actions/productActions";
import Product from "./Product";
import Spinner from "../../../shared/components/Spiner";
import Error404 from "../../../shared/components/404";

class ListProducts extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  setProducts = () => {
    if (this.props.loading) {
      return <Spinner />;
    }

    if (this.props.error) {
      return <Error404 error={this.props.error} />;
    }

    return <Product />;
  };

  render() {
    return (
      <Row className="justify-content-md-center">{this.setProducts()}</Row>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.productReducer;
};

export default connect(mapStateToProps, productsActions)(ListProducts);
