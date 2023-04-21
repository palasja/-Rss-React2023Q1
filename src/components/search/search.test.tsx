import React from 'react';
import { screen, render } from '@testing-library/react';
import Search from './search';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const store = mockStore({ search: { searchValue: 'Test' } });
beforeEach(() => {
  render(
    <Provider store={store}>
      <Search />
    </Provider>
  );
});

afterEach(() => {
  store.clearActions();
});
test('prop searchvalue in searchbar', () => {
  expect(screen.getByPlaceholderText(/search/i)).toHaveDisplayValue('Test');
});
