import {
  CART_NEW,
  CART_ADD,
  CART_REMOVE,
  CART_ADD_QUANTITY,
  CART_ORDER_SAVED,
  CART_CHECKOUT,
  CART_CHECKOUT_ERROR,
} from "../../types";

const INITIAL_STATE = {
  carts: [],
  errorform: false,
  message: "",
  checkout: false,
  order_saved: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_REMOVE:
      return {
        ...state,
        carts: state.carts.filter((product) => product.id !== action.payload),
      };
    case CART_ADD:
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };
    case CART_ADD_QUANTITY:
      return {
        ...state,
        carts: action.payload,
      };
    case CART_CHECKOUT:
      return {
        ...state,
        checkout: true,
      };
    case CART_ORDER_SAVED:
      return {
        ...state,
        order_saved: true,
        message: "",
        checkout: false,
      };

    case CART_NEW:
      return {
        ...state,
        order_saved: false,
        checkout: false,
        carts: [],
        errorform: false,
        message: "",
      };
    case CART_CHECKOUT_ERROR:
      return {
        ...state,
        message: action.payload,
        checkout: false,
      };

    default:
      return state;
  }
};
