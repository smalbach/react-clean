import { combineReducers } from "redux";
import productReducer from "../../../redux/product/reducers/productReducer";
import cartReducer from "../../../redux/cart/reducers/cartReducer";

export default combineReducers({
  productReducer,
  cartReducer,
});
