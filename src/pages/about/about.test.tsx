import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '.';
import { BrowserRouter } from 'react-router-dom';

test('shop name on page', () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
  expect(screen.getByText(/about food shop/i)).toBeInTheDocument();
});

test('email link on page', () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
  expect(screen.getByText('palasja@gmail.com')).toHaveAttribute(
    'href',
    'mailto: palasja@gmail.com'
  );
});
