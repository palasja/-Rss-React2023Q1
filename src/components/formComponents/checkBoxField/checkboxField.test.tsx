import { screen, render } from '@testing-library/react';
import React, { createRef } from "react"
import CheckboxField from "./checkboxField"
 
let propMock = {
  legend: "Legend Value",
  values: ["first", "second", "third"],
  refArr: Array(3).map( () => createRef<HTMLInputElement>()),
  errorMessagee: "Error message"
}
test("legend on page", () => {
  render(<CheckboxField legendProp={propMock.legend} refArr={[createRef()]} values={[]} errorMessagee=""/>);

  expect(screen.getByText(propMock.legend)).toBeInTheDocument();
})

test("all element array as unchecked checkboks", () => {
  render(<CheckboxField legendProp={propMock.legend} refArr={[createRef()]} values={propMock.values} errorMessagee=""/>);

  expect(screen.getAllByRole('checkbox')).toHaveLength(propMock.values.length);
  expect(screen.getAllByRole<HTMLInputElement>('checkbox').find( c => c.checked)).toBe(undefined);
})

test("show eerror message", () => {
  render(<CheckboxField legendProp="" refArr={[createRef()]} values={[]} errorMessagee={propMock.errorMessagee}/>);

  expect(screen.getByText(propMock.errorMessagee)).toBeInTheDocument();
})