import React from "react";
import { shallow } from "enzyme";
import ProviderMock from "../../../../../__mocks__/ProviderMock";

import Shopping from "../../../../../feature/components/Shopping";

describe("<Shopping/>", () => {
  const shoping = shallow(
    <ProviderMock>
      <Shopping />
    </ProviderMock>
  );

  test("Render  shoping", () => {
    expect(shoping.length).toEqual(1);
  });
});
