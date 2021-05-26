import Axios from "../../../config/axios/axios";
import {
  CART_NEW,
  CART_ADD,
  CART_REMOVE,
  CART_ADD_QUANTITY,
  CART_ORDER_SAVED,
  CART_CHECKOUT,
  CART_CHECKOUT_ERROR,
  CART_MODIFY_NOTE,
} from "../../types";

export const addToCart = (product) => (dispatch, getState) => {
  try {
    const { carts } = getState().cartReducer;
    const exist = carts.filter((cart) => product.id === cart.id);

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

export const modifyQuantity = (product, operation) => (dispatch, getState) => {
  try {
    const { carts } = getState().cartReducer;
    let newCart = [...carts];

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

export const modifyNote = (product, note) => (dispatch, getState) => {
  try {
    const { carts } = getState().cartReducer;
    let newCart = [...carts];
    newCart.find((p) => p.id === product.id && ((p.note = note), true));
    dispatch({
      type: CART_MODIFY_NOTE,
      payload: newCart,
    });
  } catch (error) {}
};

export const removeItemFromCart = (product) => (dispatch) => {
  try {
    dispatch({
      type: CART_REMOVE,
      payload: product.id,
    });
  } catch (error) {}
};

export const saveOrder = () => async (dispatch, getState) => {
  try {
    const { carts } = getState().cartReducer;

    dispatch({
      type: CART_CHECKOUT,
    });

    var newData = carts.map((item) => ({
      product_id: item.id,
      quantity: item.quantity,
      note: item.note,
    }));
    console.log("Error 1");
    const response = await Axios.post(
      "https://blooming-citadel-98937.herokuapp.com/api/order/create",
      { items: newData }
    );
    console.log("Error 2");
    if (response.status) {
      dispatch({
        type: CART_ORDER_SAVED,
      });
    } else {
      dispatch({
        type: CART_CHECKOUT_ERROR,
        payload: response.data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: CART_CHECKOUT_ERROR,
      payload: "Error saving order",
    });
  }
};

export const newOrder = () => (dispatch) => {
  try {
    dispatch({
      type: CART_NEW,
    });
  } catch (error) {}
};
