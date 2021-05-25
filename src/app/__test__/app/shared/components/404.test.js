import React from "react";
import { mount } from "enzyme";
import Error404 from "../../../../shared/components/404";

describe("<Error404>", () => {
  const error = mount(<Error404 />);
  test("Render of footer", () => {
    expect(error.length).toEqual(1);
    expect(error.find(".alert").length).toEqual(1);
    expect(error.find(".alert-heading").length).toEqual(2);
    expect(error.find("p").length).toEqual(1);
  });
});
