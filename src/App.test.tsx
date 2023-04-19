import { screen, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const store = mockStore({ search: { searchValue: 'Test' } });

test('landing on a bad page', () => {
  const badRoute = '/some/bad/route';
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );
  expect(screen.getByText(/Something goes wrong/i)).toBeInTheDocument();
});
