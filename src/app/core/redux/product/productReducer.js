import { PRODUCT_LIST } from "../types";

export default (state, action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
