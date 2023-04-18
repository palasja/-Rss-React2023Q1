import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import Cards from './cards';
import { CHARACTER_BY_ID_RESPONSE, SEARCH_AR_VALUES_RESPONSE } from '../../mock/mockItems';
import { Character } from '../../types';
import configureStore from 'redux-mock-store'
import { Provider, useSelector } from 'react-redux';
import store from '../../store/store'
import { searchValueLotr, searchValueState } from '../../store/slicer/searchSlice';

test('loader on the document', () => {
  render(
    <Provider store={store}>
      <Cards  />
    </Provider>
  )
  expect(screen.getAllByTestId('cards_loader').length).not.toBe(0);
});

test('no characters by search', () => {
  render(
    <Provider store={store}>
      <Cards  />
    </Provider>
  )
  expect(screen.getByText(/No characters/i)).toBeInTheDocument();
});

test('cards on page', async () => {
  let a:string =  'ar'
  store.dispatch(searchValueLotr(a));
  render(
    <Provider store={store}>
      <Cards  />
    </Provider>
  )
  await waitFor(() => screen.getAllByTestId('lotr_card'));
  expect(screen.getAllByTestId('lotr_card')).toHaveLength(13);
   expect(screen.getByTestId('lotr_card')).toBeInTheDocument();
});
