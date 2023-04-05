import { render, screen } from '@testing-library/react';
import React from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import InputField from './inputField';

const propMock = {
  type: 'text',
  labelProp: 'label',
  refProp: {} as UseFormRegisterReturn<string>,
  errorMessagee: { message: 'Error Message' } as FieldError,
};

test('show label form prop', () => {
  render(
    <InputField
      type={''}
      labelProp={propMock.labelProp}
      refProp={propMock.refProp}
      error={propMock.errorMessagee}
    />
  );

  expect(screen.getByLabelText(new RegExp(propMock.labelProp))).not.toBe(undefined);
});

test('show eerror message', () => {
  render(
    <InputField
      type={''}
      labelProp={propMock.labelProp}
      refProp={propMock.refProp}
      error={propMock.errorMessagee}
    />
  );

  expect(screen.getByText(propMock.errorMessagee.message as string)).toBeInTheDocument();
});
