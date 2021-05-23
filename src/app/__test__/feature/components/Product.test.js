import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import ListProducts from "../../../feature/components/Products/ListProducts";
import App from "../../../../../src/App";
import { shallow, ShallowWrapper } from "enzyme";

it("should render a card with the details of the Todo", () => {
  const wii = ShallowWrapper(<ListProducts />);
});
