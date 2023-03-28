import { render, screen } from '@testing-library/react';
import React from 'react';
import InputField from './inputField';

const propMock = {
  type: 'text',
  labelProp: 'label',
  refArr: null,
  errorMessagee: 'Error message',
};
test('show label form prop', () => {
  render(<InputField type={''} labelProp={propMock.labelProp} refProp={null} errorMessagee={''} />);

  expect(screen.getByLabelText(new RegExp(propMock.labelProp))).not.toBe(undefined);
});

test('show eerror message', () => {
  render(
    <InputField
      type={''}
      labelProp={propMock.labelProp}
      refProp={null}
      errorMessagee={propMock.errorMessagee}
    />
  );

  expect(screen.getByText(propMock.errorMessagee)).toBeInTheDocument();
});
