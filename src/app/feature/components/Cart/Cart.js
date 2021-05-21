import React, { useContext } from "react";
import CartDetail from "./CartDetail";
import CartContext from "../../../core/redux/cart/cartContext";
import { Table } from "react-bootstrap";
import AlertContext from "../../../core/redux/alert/alertContext";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const { carts } = cartContext;

  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  return (
    <>
      {alert ? (
        <>
          <div role="alert" className={`fade alert ${alert.category} show`}>
            {alert.message}
          </div>
        </>
      ) : null}

      <div id="head">
        <h3>Shopping Cart</h3>
      </div>
      <Table striped hover responsive>
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
        <tbody>
          {carts.map((cart) => (
            <CartDetail key={cart.id} cart={cart} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Cart;
