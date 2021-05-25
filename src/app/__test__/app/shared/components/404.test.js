import React from "react";
import { mount } from "enzyme";
import Error404 from "../../../../shared/components/404";

import { create } from "react-test-renderer";

describe("<Error404>", () => {
  const error = mount(<Error404 />);
  test("Render of footer", () => {
    expect(error.length).toEqual(1);
  });

  test("Error snapshot", () => {
    const error = create(<Error404 />);
    expect(error).toMatchSnapshot();
  });
});
