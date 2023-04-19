import { screen, render } from '@testing-library/react';
import React, { createRef } from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import { CheckboxField } from '..';

const propMock = {
  legend: 'Legend Value',
  data: [
    { value: 'first', choosen: false },
    { value: 'second', choosen: false },
  ],
  refArr: Array(3).map(() => createRef<HTMLInputElement>()),
  refProp: {} as UseFormRegisterReturn<string>,
  errorMessagee: { message: 'Error Message' } as FieldError,
};
test('legend on page', () => {
  render(
    <CheckboxField
      legendProp={propMock.legend}
      refProp={propMock.refProp}
      error={propMock.errorMessagee}
      data={[]}
    />
  );

  expect(screen.getByText(propMock.legend)).toBeInTheDocument();
});

test('all element array as unchecked checkboks', () => {
  render(
    <CheckboxField
      legendProp={propMock.legend}
      refProp={propMock.refProp}
      error={propMock.errorMessagee}
      data={propMock.data}
    />
  );

  expect(screen.getAllByRole('checkbox')).toHaveLength(propMock.data.length);
  expect(screen.getAllByRole<HTMLInputElement>('checkbox').find((c) => c.checked)).toBe(undefined);
});

test('show eerror message', () => {
  render(
    <CheckboxField
      legendProp=""
      refProp={propMock.refProp}
      error={propMock.errorMessagee}
      data={[]}
    />
  );

  expect(screen.getByText(propMock.errorMessagee.message as string)).toBeInTheDocument();
});
