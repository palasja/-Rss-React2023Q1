import React from "react";
import { getByText, render, screen } from "@testing-library/react";
import About from ".";

test("shop name on page", () => {
  render(<About />);
  expect(screen.getByText(/about food shop/i)).toBeInTheDocument();
});

test("email link on page", () => {
  render(<About />);
  expect(screen.getByRole("link")).toHaveAttribute("href", "mailto: palasja@gmail.com");
});