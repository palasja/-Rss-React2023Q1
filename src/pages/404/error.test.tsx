import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './error';

test('error page message', () => {
  render(<Error />);
  expect(screen.getByText(/Something goes wrong/i)).toBeInTheDocument();
});

test('error message has error class', () => {
  render(<Error />);
  expect(screen.getByText(/Something goes wrong/i)).toHaveClass('main_error_message');
});
