import React from "react";
import { mount } from "enzyme";
import Footer from "../../../shared/Layout/Footer";
import { create } from "react-test-renderer";

describe("<Footer>", () => {
  const footer = mount(<Footer />);
  test("Render of footer ", () => {
    expect(footer.length).toEqual(1);
  });

  test("Title render ", () => {
    expect(footer.find(".Footer-title").text()).toEqual("React app");
  });
});

describe("Footer snapshop ", () => {
  test("Test UI Component footer", () => {
    const footer = create(<Footer />);
    expect(footer.toJSON).toMatchSnapshot();
  });
});