import {
  CART_NEW,
  CART_ADD,
  CART_REMOVE,
  CART_ADD_QUANTITY,
  CART_ORDER_SAVED,
  CART_CHECKOUT,
} from "../types";

export default (state, action) => {
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
        chekout: true,
      };
    case CART_ORDER_SAVED:
      return {
        ...state,
        order_saved: true,
      };

    case CART_NEW:
      return {
        ...state,
        order_saved: false,
        chekout: false,
        carts: [],
        errorform: false,
        menssage: null,
      };

    default:
      return state;
  }
};
