import React from "react";
import { mount, shallow } from "enzyme";
import { create } from "react-test-renderer";
// eslint-disable-next-line jest/no-mocks-import
import ProviderMock from "../../../../__mocks__/ProviderMock";

import Header from "../../../../shared/Layout/Header";

describe("<Header>", () => {
  const header = shallow(
    <ProviderMock>
      <Header />
    </ProviderMock>
  );

  test("Header render", () => {
    expect(header.length).toEqual(1);
  });
  test("Title render", () => {
    const header_mount = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header_mount.find(".title").text()).toEqual("Order App");
  });
});
