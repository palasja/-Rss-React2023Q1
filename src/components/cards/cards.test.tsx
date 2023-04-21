import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import Cards from './cards';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { searchValueLotr } from '../../store/slicer/searchSlice';

test('loader on the document', () => {
  render(
    <Provider store={store}>
      <Cards />
    </Provider>
  );
  expect(screen.getAllByTestId('cards_loader').length).not.toBe(0);
});

test('no characters by search', () => {
  render(
    <Provider store={store}>
      <Cards />
    </Provider>
  );
  expect(screen.getByText(/No characters/i)).toBeInTheDocument();
});

test('cards on page', async () => {
  const a = 'ar';
  store.dispatch(searchValueLotr(a));
  render(
    <Provider store={store}>
      <Cards />
    </Provider>
  );
  await waitFor(() => screen.getAllByTestId('lotr_card'));
  expect(screen.getAllByTestId('lotr_card')).toHaveLength(13);
  expect(screen.getByTestId('lotr_card')).toBeInTheDocument();
});
