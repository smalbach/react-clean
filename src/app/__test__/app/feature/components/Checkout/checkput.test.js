import React from "react";
import { shallow } from "enzyme";
import ProviderMock from "../../../../../__mocks__/ProviderMock";

import Checkout from "../../../../../feature/components/Checkout/";

describe("<Checkout/>", () => {
  const checkout = shallow(
    <ProviderMock>
      <Checkout />
    </ProviderMock>
  );

  test("Render  Checkout", () => {
    expect(checkout.length).toEqual(1);
  });
});
