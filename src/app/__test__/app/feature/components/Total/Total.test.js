import React from "react";
import { shallow } from "enzyme";
import ProviderMock from "../../../../../__mocks__/ProviderMock";

import Total from "../../../../../feature/components/Total";

describe("<Total/>", () => {
  const total = shallow(
    <ProviderMock>
      <Total />
    </ProviderMock>
  );

  test("Render  total", () => {
    expect(total.length).toEqual(1);
  });
});
