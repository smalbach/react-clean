import { PRODUCT_LIST, PRODUCT_LOADING, PRODUCT_ERROR } from "../../types";

const INITIAL_STATE = {
  products: [],
  error: "",
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      return {
        ...state,
        products: action.payload,
        error: "",
        loading: false,
      };
    case PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
