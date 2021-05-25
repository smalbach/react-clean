import React from "react";
import { shallow, mount } from "enzyme";
import Layout from "../../../../shared/Layout/";
// eslint-disable-next-line jest/no-mocks-import
import ProviderMock from "../../../../__mocks__/ProviderMock";

describe("<Layout>", () => {
  const layout = mount(<Layout />);
  test("Layout render", () => {
    expect(layout.length).toEqual(1);
  });
});
