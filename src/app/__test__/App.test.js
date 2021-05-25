import React from "react";
import { shallow } from "enzyme";
import ProviderMock from "../__mocks__/ProviderMock";

import App from "../../app/App";

describe("<App/>", () => {
  const app = shallow(
    <ProviderMock>
      <App />
    </ProviderMock>
  );

  test("Render  app", () => {
    expect(app.length).toEqual(1);
  });
});
