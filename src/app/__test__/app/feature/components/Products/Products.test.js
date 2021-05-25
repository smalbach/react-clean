import React from "react";
import { shallow } from "enzyme";
import ProviderMock from "../../../../../__mocks__/ProviderMock";

import Product from "../../../../../feature/components/Products/Product";

describe("<Product/>", () => {
  const product = shallow(
    <ProviderMock>
      <Product />
    </ProviderMock>
  );

  test("Render  Product", () => {
    expect(product.length).toEqual(1);
  });
});
