import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';
import NewCard from './newCard';
import { MemoryRouter } from 'react-router-dom';
import store from '../../store/store';

test('form on page', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <NewCard />
      </Provider>
    </MemoryRouter>
  );
  screen.debug();
  expect(screen.getByTestId('new-card-form')).toBeInTheDocument();
});
