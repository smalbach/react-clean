import React from "react";
import { mount, shallow } from "enzyme";
import { create } from "react-test-renderer";
import ProviderMock from "../../../__mocks__/ProviderMock";

import Header from "../../../shared/Layout/Header";

describe("<Header>", () => {
  const header = shallow(
    <ProviderMock>
      <Header />
    </ProviderMock>
  );

  test("Header render ", () => {
    expect(header.length).toEqual(1);
  });
  test("Title render", () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.find(".title").text()).toEqual("Order App");
  });
});

describe("Header snapshop ", () => {
  test("Test UI Component Header", () => {
    const header = create(<Header />);
    expect(header.toJSON).toMatchSnapshot();
  });
});
