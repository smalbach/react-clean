import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import * as actionsProduct from "../../../../../core/redux/product/actions/productActions";
// eslint-disable-next-line jest/no-mocks-import
import { products } from "../../../../../__mocks__/ProductMock";
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);

describe("Product  actions", () => {
  test("Product  actions", () => {
    const INITIAL_STATE = {
      carts: [products],
      errorform: false,
      message: "",
      checkout: false,
      order_saved: false,
    };
    const store = mockStore(INITIAL_STATE);
    store.clearActions();

    mock
      .onGet("https://blooming-citadel-98937.herokuapp.com/api/product/list")
      .reply(200, {
        data: products,
      });

    // eslint-disable-next-line jest/valid-expect-in-promise
    store.dispatch(actionsProduct.getProducts()).then(() => {
      let expectedActions = [
        {
          type: "PRODUCT_LIST",
          payload: {
            data: [],
          },
        },
      ];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
