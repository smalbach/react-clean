import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import CartContext from "../../../core/redux/cart/cartContext";
import AlertContext from "../../../core/redux/alert/alertContext";
import NumberFormat from "react-number-format";

const CartDetail = ({ cart }) => {
  const cartContext = useContext(CartContext);
  const { modifiQuantityfn, removeCartfn, modifiNotefn } = cartContext;

  const alertContext = useContext(AlertContext);
  const { alert, message, showAlert } = alertContext;

  const { name, image, price, quantity, note, promotion_day } = cart;
  var date = new Date();
  var dayOfWeek = date.getDay();

  let promption = 0;

  if (promotion_day === dayOfWeek) {
    promption = 0.3;
  }

  const discount = price * quantity * promption;
  const total = price * quantity - discount;

  const addQuantity = () => {
    if (quantity < 3) {
      modifiQuantityfn(cart, 1);
    } else {
      showAlert("Only allow 3 items", "alert-warning");
    }
  };

  const delQuantity = () => {
    if (quantity > 1) {
      modifiQuantityfn(cart, -1);
    } else {
      showAlert("Minimun 1 item", "alert-warning");
    }
  };

  const removeCart = () => {
    if (quantity <= 3 || quantity > 0) {
      removeCartfn(cart);
    } else {
      alert("no mas hay quie cambiar esto");
    }
  };

  const updateNote = (e) => {
    modifiNotefn(cart, e.target.value);
  };

  return (
    <>
      {" "}
      <tr>
        <td>
          <img src={image} width="30" />
        </td>
        <td>{name}</td>
        <td>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Note"
            onChange={updateNote}
          />{" "}
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
          {" "}
          <NumberFormat
            value={discount}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </td>

        <td>
          {" "}
          <Button variant="" size="sm" onClick={delQuantity}>
            -
          </Button>{" "}
          {quantity}{" "}
          <Button variant="" size="sm" onClick={addQuantity}>
            +
          </Button>{" "}
        </td>

        <td>
          {" "}
          <Button variant="" size="sm" onClick={removeCart}>
            Remove
          </Button>{" "}
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
    </>
  );
};

export default CartDetail;
