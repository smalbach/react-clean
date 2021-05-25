import reducer from "../../../../../core/redux/cart/reducers/cartReducer";
// eslint-disable-next-line jest/no-mocks-import
import ProductMock from "../../../../../__mocks__/ProductMock";

describe("Reducers", () => {
  test("Retutn initial State", () => {
    expect(reducer({}, "")).toEqual({});
  });

  test("AddToCart", () => {
    const INITIAL_STATE = {
      carts: [],
    };
    const payload = ProductMock;

    const action = {
      type: "CART_ADD",
      payload,
    };

    const expected = {
      carts: [ProductMock],
    };

    expect(reducer(INITIAL_STATE, action)).toEqual(expected);
  });
});
