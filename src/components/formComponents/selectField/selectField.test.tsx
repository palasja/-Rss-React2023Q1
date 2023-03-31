import { screen, render } from '@testing-library/react';
import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import SelectField from './selectField';

const propMock = {
  labelProp: 'Label',
  values: ['first', 'second', 'third'],
  refProp: {} as UseFormRegisterReturn<string>,
  defaultValue: 'defaultValue',
  errorMessagee: {message: "Error Message"} as FieldError,
};

test('show label form prop', () => {
  render(
    <SelectField
      labelProp={propMock.labelProp}
      values={[]}
      defaultValue={''}
      refProp= {propMock.refProp}
      error = {propMock.errorMessagee}
    />
  );

  expect(screen.getByLabelText(new RegExp(propMock.labelProp))).not.toBe(undefined);
});

test('all values from props as option, default value selected', () => {
  render(
    <SelectField
      labelProp={''}
      refProp= {propMock.refProp}
      values={propMock.values}
      defaultValue={propMock.defaultValue}
      error = {propMock.errorMessagee}
    />
  );

  expect(screen.getAllByRole('option')).toHaveLength(propMock.values.length + 1);
  expect(screen.getAllByRole<HTMLOptionElement>('option').find((o) => o.selected)).toHaveValue(
    propMock.defaultValue
  );
});

test('show eerror message', () => {
  render(
    <SelectField
      labelProp={''}
      refProp = {propMock.refProp}
      values={[]}
      defaultValue={''}
      error = {propMock.errorMessagee}
    />
  );
screen.debug();
  expect(screen.getByText(propMock.errorMessagee.message as string)).toBeInTheDocument();
});
