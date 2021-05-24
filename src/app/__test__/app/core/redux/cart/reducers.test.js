import reducer from "../../../../../core/redux/cart/reducers/cartReducer";
import ProductMock from "../../../../../__mocks__/ProductMock";
import {
  CART_NEW,
  CART_ADD,
  CART_REMOVE,
  CART_ADD_QUANTITY,
  CART_ORDER_SAVED,
  CART_CHECKOUT,
  CART_CHECKOUT_ERROR,
} from "../../../../../core/redux/types";

describe("Reducers", () => {
  test("Retutn initial State", () => {
    expect(reducer({}, "")).toEqual({});
  });
  test("AddToCart", () => {
    const INITIAL_STATE = {
      carts: [],
    };
    const payload = ProductMock;
    console.log(ProductMock);
    const action = {
      type: CART_ADD,
      payload,
    };

    const expected = {
      carts: [ProductMock],
    };

    expect(reducer(INITIAL_STATE, action)).toEqual(expected);
  });
});
