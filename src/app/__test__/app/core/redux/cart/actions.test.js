import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import * as actionsCart from "../../../../../core/redux/cart/actions/cartActions";
import { products } from "../../../../../__mocks__/ProductMock";
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);
import fetchMock from "fetch-mock";

describe("Cart actions", () => {
  test("AddToCart", () => {
    const INITIAL_STATE = {
      carts: [],
      errorform: false,
      message: "",
      checkout: false,
      order_saved: false,
    };
    const store = mockStore(INITIAL_STATE);

    // Dispatch the action
    store.dispatch(actionsCart.addToCart(products));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const payload = products;
    const expectedPayload = {
      type: "CART_ADD",
      payload,
    };
    expect(actions).toEqual([expectedPayload]);
  });

  test("modifyQuantity CART_ADD_QUANTITY +1", () => {
    let products_add = products;
    products_add.quantity = 1;
    products_add.note = "";
    const INITIAL_STATE = {
      carts: [products_add],
      errorform: false,
      message: "",
      checkout: false,
      order_saved: false,
    };
    const store = mockStore(INITIAL_STATE);
    store.dispatch(actionsCart.addToCart(products));
    store.dispatch(actionsCart.modifyQuantity(products_add, 1));
    const actions = store.getActions();
    products_add.quantity = 2;
    const payload = products_add;
    const expectedPayload = {
      payload,
    };

    expect(actions[0].payload).toEqual(expectedPayload.payload);
  });

  test("modifyQuantity CART_ADD_QUANTITY -1", () => {
    let products_add = products;
    products_add.quantity = 2;
    products_add.note = "";
    const INITIAL_STATE = {
      carts: [products_add],
      errorform: false,
      message: "",
      checkout: false,
      order_saved: false,
    };
    const store = mockStore(INITIAL_STATE);
    store.dispatch(actionsCart.addToCart(products));
    store.dispatch(actionsCart.modifyQuantity(products_add, -1));

    const actions = store.getActions();

    products_add.quantity = 1;
    const payload = products_add;
    const expectedPayload = {
      payload,
    };

    expect(actions[0].payload).toEqual(expectedPayload.payload);
  });

  test("modifyQuantity CART_REMOVE ", () => {
    let products_add = products;
    products_add.quantity = 2;
    products_add.note = "";
    const INITIAL_STATE = {
      carts: [products_add],
      errorform: false,
      message: "",
      checkout: false,
      order_saved: false,
    };
    const store = mockStore(INITIAL_STATE);

    store.dispatch(actionsCart.removeItemFromCart(products));

    const actions = store.getActions();

    products_add.quantity = 1;
    const payload = products_add;
    const expectedPayload = {
      payload: 1,
      type: "CART_REMOVE",
    };

    expect(actions).toEqual([expectedPayload]);
  });
  test("should get ALL_ITEMS", () => {
    const INITIAL_STATE = {
      carts: [products],
      errorform: false,
      message: "",
      checkout: false,
      order_saved: false,
    };
    const store = mockStore(INITIAL_STATE);
    store.clearActions();

    mock.onPost("/api/order/create").reply(200, {
      data: products,
    });

    store.dispatch(actionsCart.saveOrder()).then(() => {
      let expectedActions = [
        {
          type: "GET_ALL_ITEMS",
          payload: {
            data: [],
          },
        },
      ];
    });
  });

  test("modifyQuantity CART_MODIFY_NOTE ", () => {
    let products_add = products;
    products_add.note = "";
    const INITIAL_STATE = {
      carts: [products_add],
      errorform: false,
      message: "",
      checkout: false,
      order_saved: false,
    };
    const store = mockStore(INITIAL_STATE);

    store.dispatch(actionsCart.modifyNote(products, "Test"));

    const actions = store.getActions();

    products_add.note = "Test";
    const payload = products_add;
    const expectedPayload = {
      type: "CART_MODIFY_NOTE",
      payload,
    };

    expect(actions).toEqual([]);
  });

  test("modifyQuantity CART_REMOVE ", () => {
    let products_add = products;
    products_add.note = "";
    const INITIAL_STATE = {
      carts: [products_add],
      errorform: false,
      message: "",
      checkout: false,
      order_saved: false,
    };
    const store = mockStore(INITIAL_STATE);

    store.dispatch(actionsCart.removeItemFromCart(products));

    const actions = store.getActions();

    products_add.note = "Test";
    const expectedPayload = {
      type: "CART_REMOVE",
      payload: 1,
    };

    expect(actions).toEqual([expectedPayload]);
  });
});
