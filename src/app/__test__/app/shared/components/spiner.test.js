import React from "react";
import { mount } from "enzyme";
import Spiner from "../../../../shared/components/Spiner";
import { create } from "react-test-renderer";

describe("<Spiner>", () => {
  const spiner = mount(<Spiner />);
  test("Render of Spiner ", () => {
    expect(spiner.length).toEqual(1);
  });
});
