import React from "react";
import { mount, shallow } from "enzyme";
import ProviderMock from "../../../../__mocks__/ProviderMock";
import ProductMock from "../../../../__mocks__/ProductMock";
import Product from "../../../../feature/components/Products/Product";

describe("<Product/>", () => {
  const addToCart = jest.fn();
  const product = shallow(
    <ProviderMock>
      <Product />
    </ProviderMock>
  );

  test("Render del componente Product", () => {
    expect(product.length).toEqual(1);
  });
  test("Comprobar el boton de comprar", () => {
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product />
      </ProviderMock>
    );

    const button = wrapper.find("button-add");
  });
});
