import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import Home from './home';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';

test('count cards search value', async () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </BrowserRouter>
  );
  fireEvent.change(screen.getByPlaceholderText(/search/i), { target: { value: 'ar' } });
  fireEvent.submit(screen.getByPlaceholderText(/search/i));
  await waitFor(() => screen.getAllByTestId('lotr_card'));
  expect(screen.getAllByTestId('lotr_card')).toHaveLength(13);
});

test('load searchValue local storage', async () => {
  const testValue = 'ar';
  localStorage.setItem('searchValue', testValue);
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </BrowserRouter>
  );
  fireEvent.submit(screen.getByPlaceholderText(/search/i));
  await waitFor(() => screen.getAllByTestId('lotr_card'));
  expect(screen.getAllByTestId('lotr_card')).toHaveLength(13);
});
