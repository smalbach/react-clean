import * as actions from "../../../../../core/redux/cart/actions/cartActions";
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

describe("Cart Actions", () => {
  test("addToCart action", () => {
    const payload = ProductMock;
    const expected = {
      type: CART_ADD,
      payload,
    };
    console.log(ProductMock);

    /*  expect(actions.addToCart(payload)).toEqual(expected); */
  });
});
