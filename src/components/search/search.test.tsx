import React from "react";
import { screen , render} from "@testing-library/react"
import Search from "./search";
import { unmountComponentAtNode } from "react-dom";

test("prop searchvalue in searchbar", ()=>{
  let testValue = "Test";
  render(<Search onChange={function (newValue: string): void {
    throw new Error("Function not implemented.");
  } } curSearchValue={testValue} />);

  expect(screen.getByPlaceholderText(/search/i)).toHaveDisplayValue(testValue);
});