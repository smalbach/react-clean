import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import App from "../../App";
import ListProducts from "../feature/components/Products/ListProducts";
import { shallow } from "enzyme";

test("<App/> the app works the first time ", () => {
  render(<App />);
  const title = screen.getByTestId("app-name");
  expect(title).toBeInTheDocument();
  expect(title.tagName).toBe("H1");
  expect(title.textContent).toBe("Orders");

  expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
  expect(screen.getByText("Checkout")).toBeInTheDocument();
  expect(screen.getByText("Product")).toBeInTheDocument();
});
