import React from "react";
import { shallow } from "enzyme";
import ProviderMock from "../../../../../__mocks__/ProviderMock";

import Cart from "../../../../../feature/components/Cart/Cart";

describe("<Cart/>", () => {
  const cart = shallow(
    <ProviderMock>
      <Cart />
    </ProviderMock>
  );

  test("Render  Product", () => {
    expect(cart.length).toEqual(1);
  });
});
