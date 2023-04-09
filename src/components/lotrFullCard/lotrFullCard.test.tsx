import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import LotrFullCard from './lotrFullCard';

test('loader on modal page', () => {
  render(<LotrFullCard characterId={'5cd99d4bde30eff6ebccfcf9'} />);
  expect(screen.getByTestId('loader')).toBeInTheDocument();
});

test('loading data on modal page', async () => {
  render(<LotrFullCard characterId={'5cd99d4bde30eff6ebccfcf9'} />);
  await waitFor(() => screen.getByRole('link'));
  expect(screen.getByRole('link')).toBeInTheDocument();
});

test('NaN value not in the page', async () => {
  render(<LotrFullCard characterId={'5cd99d4bde30eff6ebccfcf9'} />);
  await waitFor(() => screen.getByRole('link'));
  expect(screen.queryByText('NaN')).not.toBeInTheDocument();
});
