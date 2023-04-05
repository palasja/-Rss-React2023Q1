import React from 'react';
import { screen, render } from '@testing-library/react';
import Footer from './footer';

test('logo in footer', () => {
  render(<Footer />);

  expect(screen.getByRole('img')).toBeInTheDocument();
  expect(screen.getByRole('img')).toHaveAttribute('alt');
});
