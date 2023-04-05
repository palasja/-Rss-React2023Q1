import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './error';
import { BrowserRouter } from 'react-router-dom';

test('error page message', () => {
  render(
    <BrowserRouter>
      <Error />
    </BrowserRouter>
  );
  expect(screen.getByText(/Something goes wrong/i)).toBeInTheDocument();
});

test('error message has error class', () => {
  render(
    <BrowserRouter>
      <Error />
    </BrowserRouter>
  );
  expect(screen.getByText(/Something goes wrong/i)).toHaveClass('main_error_message');
});
