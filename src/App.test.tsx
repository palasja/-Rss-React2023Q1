import { screen, render } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

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

test('full app rendering/navigating', async () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
  const user = userEvent.setup();

  expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();

  await user.click(screen.getByText(/about/i));
  expect(screen.getByText(/about food shop/i)).toBeInTheDocument();
});
