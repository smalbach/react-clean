import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../../core/redux/cart/cartContext";

const Checkout = () => {
  const cartContext = useContext(CartContext);
  const { saveOrderfn } = cartContext;
  const saveOrder = () => {
    saveOrderfn();
  };
  return (
    <>
      <Button onClick={saveOrder}>Checkout</Button>
    </>
  );
};

export default Checkout;
