import React from "react";
import { shallow } from "enzyme";
// eslint-disable-next-line jest/no-mocks-import
import ProviderMock from "../../../../../__mocks__/ProviderMock";

import Total from "../../../../../feature/components/Total";

describe("<Total/>", () => {
  const total = shallow(
    <ProviderMock>
      <Total />
    </ProviderMock>
  );

  test("Render  Total", () => {
    expect(total.length).toEqual(1);
  });
});
