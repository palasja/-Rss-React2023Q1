import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import NewCardForm from './newCardForm';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import { newItemInit } from '../../helper/items';

const mockStore = configureStore([])
const store = mockStore({formSlice: newItemInit})

beforeEach(() => {
  render(
    <Provider store={store}>
      <NewCardForm newCardId={0} confirmAction={() => {}} />
    </Provider>
  )
})
const mockNewCard = {
  type: 0,
  name: 'Burger',
  cost: '12',
  startRating: '3',
  calories: '850',
  image: null,
  imageBlob: 'blob:http://localhost:5173/9f6391d7-bc18-411a-b90b-8450668761f3',
  weight: 0,
  tags: [1, 3],
  startDate: '2022-02-02',
}

test('error count on empty form', async () => {
  const countField = 7;
screen.debug()
  fireEvent.submit(screen.getByRole('button'));
  expect(await screen.findAllByTestId('errorMessge')).toHaveLength(countField);
});

test('check name validation', async () => {
  fireEvent.input(screen.getByTestId('Name'), {
    target: { value: mockNewCard.name.toLocaleLowerCase() },
  });
  fireEvent.submit(screen.getByRole('button'));
  expect(await screen.findByText(/uppercase/i)).toBeInTheDocument();
});

test('check cost validation', async () => {
  fireEvent.input(screen.getByTestId(/cost/i), { target: { value: -2 } });
  fireEvent.submit(screen.getByRole('button'));
  expect(await screen.findByText(/more than 0/i)).toBeInTheDocument();

  fireEvent.input(screen.getByTestId(/cost/i), { target: { value: 40 } });
  fireEvent.submit(screen.getByRole('button'));
  expect(await screen.findByText(/Cost so mutch/i)).toBeInTheDocument();
});

test('check startSell validation', async () => {
  const curDate = new Date();
  const tomorrow = new Date(curDate.setDate(curDate.getDate() - 1));

  fireEvent.input(screen.getByTestId(/Start Sale/i), {
    target: { value: tomorrow.toISOString().split('T')[0] },
  });
  fireEvent.submit(screen.getByRole('button'));
  expect(await screen.findByText(/tomorrow at least/i)).toBeInTheDocument();
});
