import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import NumberFormat from "react-number-format";
import * as cartActions from "../../../core/redux/cart/actions/cartActions";
import Swal from "sweetalert2";

class CartDetail extends Component {
  addQuantity = (product) => {
    const { modifyQuantity } = this.props;

    if (product.quantity < 3) {
      modifyQuantity(product, 1);
    } else {
      Swal.fire({
        title: "Opps!",
        text: "Only allow 3 items",
        icon: "warning",
        confirmButtonText: "Back",
      });
    }
  };

  delQuantity = (product) => {
    const { modifyQuantity } = this.props;
    if (product.quantity > 1) {
      modifyQuantity(product, -1);
    } else {
      Swal.fire({
        title: "Opps!",
        text: "Minimun 1 item",
        icon: "warning",
        confirmButtonText: "Back",
      });
    }
  };

  removeCart = (product) => {
    const { removeItemFromCart } = this.props;
    if (product.quantity <= 3 || product.quantity > 0) {
      removeItemFromCart(product);
    } else {
      alert("no mas hay quie cambiar esto");
    }
  };

  updateNote = (e, product) => {
    const { modifyNote } = this.props;
    modifyNote(product, e.target.value);
  };

  calclateTotal = (product) => {
    const { price, quantity, promotion_day } = product;

    var date = new Date();
    var dayOfWeek = date.getDay();
    let promption = 0;

    if (promotion_day === dayOfWeek) {
      promption = 0.3;
    }

    const discount = price * quantity * promption;
    const total = price * quantity - discount;
    return { discount, total };
  };

  rednderCart = () => {
    const cart = this.props.carts.map((cart, key) => {
      const { id, image, name, price, quantity } = cart;
      const { discount, total } = this.calclateTotal(cart);
      return (
        <tr key={id}>
          <td>
            <img src={image} width="30" />
          </td>
          <td>{name}</td>
          <td>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Note"
              onChange={(e) => this.updateNote(e, cart)}
            />
          </td>
          <td>
            <NumberFormat
              value={price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </td>
          <td>
            <NumberFormat
              value={discount}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </td>

          <td>
            <Button variant="" size="sm" onClick={() => this.delQuantity(cart)}>
              -
            </Button>
            {quantity}
            <Button variant="" size="sm" onClick={() => this.addQuantity(cart)}>
              +
            </Button>
          </td>

          <td>
            <Button variant="" size="sm" onClick={() => this.removeCart(cart)}>
              Remove
            </Button>
          </td>
          <td>
            <NumberFormat
              value={total}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </td>
        </tr>
      );
    });
    return cart;
  };

  render() {
    return <>{this.rednderCart()}</>;
  }
}

const mapStateToProps = ({ cartReducer }) => cartReducer;

export default connect(mapStateToProps, cartActions)(CartDetail);
