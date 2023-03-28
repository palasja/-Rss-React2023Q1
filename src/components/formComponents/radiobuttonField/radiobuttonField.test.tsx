import { screen, render } from '@testing-library/react';
import React, { createRef } from "react"
import RadioButtonField from './radiobuttonField';
 
let propMock = {
  legend: "Legend Value",
  values: ["first", "second", "third"],
  refArr: [],
  errorMessagee: "Error message"
}
test("legend on page", () => {
  render(<RadioButtonField legendProp={propMock.legend} refArr={[createRef()]} values={[]} errorMessagee=""/>);

  expect(screen.getByText(propMock.legend)).toBeInTheDocument();
})

test("all elements as unchecked radiobutton", () => {
  render(<RadioButtonField legendProp="" refArr={[createRef()]} values={propMock.values} errorMessagee=""/>);

  expect(screen.getAllByRole('radio')).toHaveLength(propMock.values.length);
  expect(screen.getAllByRole<HTMLInputElement>('radio').find( c => c.checked)).toBe(undefined);
})

test("show eerror message", () => {
  render(<RadioButtonField legendProp="" refArr={[createRef()]} values={[]} errorMessagee={propMock.errorMessagee}/>);

  expect(screen.getByText(propMock.errorMessagee)).toBeInTheDocument();
})