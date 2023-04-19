import { screen, render } from '@testing-library/react';
import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import RadioButtonField from './radiobuttonField';

const propMock = {
  legend: 'Legend Value',
  values: ['first', 'second', 'third'],
  refProp: {} as UseFormRegisterReturn<string>,
  errorMessagee: { message: 'Error Message' } as FieldError,
};

test('legend on page', () => {
  render(
    <RadioButtonField
      legendProp={propMock.legend}
      refProp={propMock.refProp}
      data={{
        values: [],
        choosen: undefined,
      }}
      error={undefined}
    />
  );

  expect(screen.getByText(propMock.legend)).toBeInTheDocument();
});

test('all elements as unchecked radiobutton', () => {
  render(
    <RadioButtonField
      legendProp=""
      refProp={propMock.refProp}
      data={{
        values: propMock.values,
        choosen: undefined,
      }}
      error={propMock.errorMessagee}
    />
  );

  expect(screen.getAllByRole('radio')).toHaveLength(propMock.values.length);
  expect(screen.getAllByRole<HTMLInputElement>('radio').find((c) => c.checked)).toBe(undefined);
});

test('show eerror message', () => {
  render(
    <RadioButtonField
      legendProp=""
      refProp={propMock.refProp}
      data={{
        values: propMock.values,
        choosen: undefined,
      }}
      error={propMock.errorMessagee}
    />
  );

  expect(screen.getByText(propMock.errorMessagee.message as string)).toBeInTheDocument();
});
