import React, { Component } from "react";
import { connect } from "react-redux";
import CartDetail from "./CartDetail";
import { Table } from "react-bootstrap";
import * as cartActions from "../../../core/redux/cart/actions/cartActions";

const { modifyQuantity, modifyNote } = cartActions;

class Cart extends Component {
  renderCart = () => {
    console.log(this.props.carts.length);
    if (this.props.carts.length === 0) {
      return (
        <tr>
          <td colSpan="8">No items</td>
        </tr>
      );
    }

    return <CartDetail />;
  };

  render() {
    return (
      <>
        <div data-testid="app-cart">
          <div className="head">
            <h3>Shopping Cart</h3>

            <Table hover responsive striped>
              <thead>
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th></th>
                  <th>U. price</th>
                  <th>Discount</th>
                  <th>Quantity</th>
                  <th></th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>{this.renderCart()}</tbody>
            </Table>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ cartReducer }) => cartReducer;

const mapDispatchToProps = {
  modifyQuantity,
  modifyNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
