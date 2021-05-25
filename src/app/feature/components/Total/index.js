import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import NumberFormat from "react-number-format";

class Total extends Component {
  calcualteTotal = () => {
    let total = 0;
    let quantity = 0;

    var date = new Date();
    var dayOfWeek = date.getDay();

    this.props.carts.map((cart) => {
      let promption = 0;
      quantity += cart.quantity;
      if (cart.promotion_day === dayOfWeek) {
        promption = 0.3;
      }

      const discount = cart.price * cart.quantity * promption;
      total += cart.price * cart.quantity - discount;
    });
    return { total, quantity };
  };

  renderTotal = () => {
    const { total, quantity } = this.calcualteTotal();
    return (
      <Table>
        <tbody>
          <tr>
            <td># items</td>
            <td>{quantity}</td>
            <td>Total</td>
            <td>
              <NumberFormat
                value={total}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$ "}
              />
            </td>
          </tr>
        </tbody>
      </Table>
    );
  };

  render() {
    return <>{this.renderTotal()}</>;
  }
}

const mapStateToProps = ({ cartReducer }) => cartReducer;

export default connect(mapStateToProps)(Total);
