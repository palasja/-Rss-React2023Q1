import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import LotrFullCard from './lotrFullCard';
import { Provider } from 'react-redux';
import store from '../../store/store';

test('loader on modal page', () => {
  render(
    <Provider store={store}>
      <LotrFullCard characterId={'5cd99d4bde30eff6ebccfcf9'} />
    </Provider>
  );
  expect(screen.getByTestId('loader')).toBeInTheDocument();
});

test('loading data on modal page', async () => {
  render(
    <Provider store={store}>
      <LotrFullCard characterId={'5cd99d4bde30eff6ebccfcf9'} />
    </Provider>
  );
  await waitFor(() => screen.getByRole('link'));
  expect(screen.getByRole('link')).toBeInTheDocument();
});

test('NaN value not in the page', async () => {
  render(
    <Provider store={store}>
      <LotrFullCard characterId={'5cd99d4bde30eff6ebccfcf9'} />
    </Provider>
  );
  await waitFor(() => screen.getByRole('link'));
  expect(screen.queryByText('NaN')).not.toBeInTheDocument();
});
