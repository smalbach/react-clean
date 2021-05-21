import React, { useReducer } from "react";
import productContext from "./productContext";
import productReducer from "./productReducer";
import Axios from "../../config/axios/axios";

import { PRODUCT_LIST } from "../types";

const ProductState = (props) => {
  const initialState = {
    products: [],
    errorform: false,
    menssage: null,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  const getProductsfn = async () => {
    try {
      const result = await Axios.get(
        "https://blooming-citadel-98937.herokuapp.com/api/product/list"
      );
      //console.log(result.data.results);
      dispatch({
        type: PRODUCT_LIST,
        payload: result.data.results,
      });
    } catch (error) {}
  };

  return (
    <productContext.Provider
      value={{
        products: state.products,
        getProductsfn,
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;
