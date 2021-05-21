import { combineReducers } from "redux";
import productReducer from "../../../redux/product/productReducer";
import cartReducer from "../../../redux/cart/cartReducer";

export default combineReducers({
  products: productReducer,
  cart: cartReducer,
});
