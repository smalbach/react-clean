import React from "react";
import { mount, shallow } from "enzyme";
import { create } from "react-test-renderer";
import Layout from "../../../../shared/Layout/";
// eslint-disable-next-line jest/no-mocks-import
import ProviderMock from "../../../../__mocks__/ProviderMock";

describe("<Layout>", () => {
  const layout = shallow(
    <ProviderMock>
      <Layout />
    </ProviderMock>
  );
  test("Layout render", () => {
    expect(layout.length).toEqual(1);
  });
});
