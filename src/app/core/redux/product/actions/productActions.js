import Axios from "../../../config/axios/axios";
import { PRODUCT_LIST, PRODUCT_LOADING, PRODUCT_ERROR } from "../../types";

export const getProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LOADING,
  });
  try {
    const response = await Axios.get(
      "https://blooming-citadel-98937.herokuapp.com/api/product/list1"
    );
    dispatch({
      type: PRODUCT_LIST,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: "Error loading products",
    });
  }
};
