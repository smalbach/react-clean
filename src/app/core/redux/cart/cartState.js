import React, { useReducer } from "react";
import cartContext from "./cartContext";
import cartReducer from "./cartReducer";
import Axios from "../../config/axios/axios";

import {
  CART_NEW,
  CART_ADD,
  CART_REMOVE,
  CART_ADD_QUANTITY,
  CART_ORDER_SAVED,
  CART_CHECKOUT,
} from "../types";

const CartState = (props) => {
  const initialState = {
    carts: [],
    errorform: false,
    menssage: null,
    chekout: false,
    order_saved: false,
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCartfn = (product) => {
    try {
      const exist = state.carts.filter((cart) => product.id === cart.id);

      if (exist.length === 0) {
        product.quantity = 1;
        product.note = "";
        dispatch({
          type: CART_ADD,
          payload: product,
        });
      }
    } catch (error) {}
  };

  const modifiQuantityfn = (product, operation) => {
    try {
      let newCart = [...state.carts];
      newCart.find(
        (p) =>
          p.id === product.id &&
          ((p.quantity = p.quantity + parseInt(operation)), true)
      );
      dispatch({
        type: CART_ADD_QUANTITY,
        payload: newCart,
      });
    } catch (error) {}
  };

  const modifiNotefn = (product, note) => {
    try {
      let newCart = [...state.carts];
      newCart.find((p) => p.id === product.id && ((p.note = note), true));
      dispatch({
        type: CART_ADD_QUANTITY,
        payload: newCart,
      });
    } catch (error) {}
  };

  const removeCartfn = (product) => {
    try {
      dispatch({
        type: CART_REMOVE,
        payload: product.id,
      });
    } catch (error) {}
  };

  const saveOrderfn = async () => {
    try {
      dispatch({
        type: CART_CHECKOUT,
      });
      var newData = state.carts.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
        note: item.note,
      }));
      const response = await Axios.post(
        "https://blooming-citadel-98937.herokuapp.com/api/order/create",
        { items: newData }
      );

      dispatch({
        type: CART_ORDER_SAVED,
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const newOrderfn = () => {
    try {
      dispatch({
        type: CART_NEW,
      });
    } catch (error) {}
  };

  return (
    <cartContext.Provider
      value={{
        carts: state.carts,
        chekout: state.chekout,
        order_saved: state.order_saved,
        newOrderfn,
        addToCartfn,
        modifiQuantityfn,
        removeCartfn,
        modifiNotefn,
        saveOrderfn,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export default CartState;
