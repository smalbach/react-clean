import React from "react";
import { shallow } from "enzyme";
import ProviderMock from "../../../../../__mocks__/ProviderMock";

import ListProducts from "../../../../../feature/components/Products/ListProducts";

describe("<ListProducts/>", () => {
  const product = shallow(
    <ProviderMock>
      <ListProducts />
    </ProviderMock>
  );

  test("Render  ListProducts", () => {
    expect(product.length).toEqual(1);
  });
});
