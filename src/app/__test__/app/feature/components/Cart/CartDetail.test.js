import React from "react";
import { shallow } from "enzyme";
import ProviderMock from "../../../../../__mocks__/ProviderMock";

import CartDetail from "../../../../../feature/components/Cart/CartDetail";

describe("<CartDetail/>", () => {
  const cart = shallow(
    <ProviderMock>
      <CartDetail />
    </ProviderMock>
  );

  test("Render  CartDetail", () => {
    expect(cart.length).toEqual(1);
  });
});
