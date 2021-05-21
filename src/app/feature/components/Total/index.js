import React, { useContext } from "react";
import CartContext from "../../../core/redux/cart/cartContext";
import { Table } from "react-bootstrap";
import NumberFormat from "react-number-format";

const Total = () => {
  const cartContext = useContext(CartContext);
  const { carts } = cartContext;
  let total = 0;

  var date = new Date();
  var dayOfWeek = date.getDay();

  carts.map((cart) => {
    let promption = 0;

    if (cart.promotion_day === dayOfWeek) {
      promption = 0.3;
    }

    const discount = cart.price * cart.quantity * promption;
    total += cart.price * cart.quantity - discount;
  });

  return (
    <>
      <Table>
        <tbody>
          <tr>
            <td># items</td>
            <td>{carts.length}</td>
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
    </>
  );
};

export default Total;
