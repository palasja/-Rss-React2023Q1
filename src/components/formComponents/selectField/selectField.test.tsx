import { screen, render } from '@testing-library/react';
import React, { createRef } from "react"
import SelectField from './selectField';
 
let propMock = {
  labelProp: "Label",
  values: ["first", "second", "third"],
  refProp: null,
  defaultValue: "defaultValue",
  errorMessagee: "Error message"
}

test("show label form prop", () => {
  render(<SelectField labelProp={propMock.labelProp} refProp={null} values={[]} defaultValue={''} errorMessagee={''} />);

  expect(screen.getByLabelText(new RegExp(propMock.labelProp))).not.toBe(undefined);
})

test("all values from props as option, default value selected", () => {
  render(<SelectField labelProp={''} refProp={null} values={propMock.values} defaultValue={propMock.defaultValue} errorMessagee={''} />);

  expect(screen.getAllByRole('option')).toHaveLength(propMock.values.length + 1);
  expect(screen.getAllByRole<HTMLOptionElement>('option').find( o => o.selected)).toHaveValue(propMock.defaultValue);
})

test("show eerror message", () => {
  render(<SelectField labelProp={''} refProp={null} values={[]} defaultValue={''} errorMessagee={propMock.errorMessagee} />);

  expect(screen.getByText(propMock.errorMessagee)).toBeInTheDocument();
})