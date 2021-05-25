import React, { Component } from "react";
import { Button } from "react-bootstrap";
import * as cartActions from "../../../core/redux/cart/actions/cartActions";
import Swal from "sweetalert2";
import Spiner from "../../../shared/components/Spiner";

import { connect } from "react-redux";

class Checkout extends Component {
  checkOutOrder = () => {
    const { saveOrder, carts } = this.props;

    if (carts.length === 0) {
      Swal.fire({
        title: "Empty cart!",
        text: "no item select!!!",
        icon: "warning",
        confirmButtonText: "Back",
      });
    } else {
      saveOrder();
    }
  };
  renderButton = () => {
    const { order_saved, message, newOrder, checkout } = this.props;

    if (checkout) {
      return <Spiner />;
    }

    if (order_saved) {
      Swal.fire({
        title: "Thanks!!!",
        text: "Your order is being processed",
        icon: "success",
        confirmButtonText: "New order",
      }).then((result) => {
        if (result.isConfirmed) {
          newOrder();
        }
      });
      return;
    }

    if (message) {
      Swal.fire({
        title: "Error!",
        text: message,
        icon: "error",
        confirmButtonText: "Try again later !",
      });
      return;
    }

    return (
      <Button onClick={this.checkOutOrder} className="checkout">
        Checkout
      </Button>
    );
  };

  render() {
    return <>{this.renderButton()}</>;
  }
}

const mapStateToProps = ({ cartReducer }) => cartReducer;

export default connect(mapStateToProps, cartActions)(Checkout);
