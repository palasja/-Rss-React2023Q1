import React from 'react';
import { screen, render } from '@testing-library/react';
import Cards from './cards';
import { CHARACTER_BY_ID_RESPONSE } from '../../mock/mockItems';
import { Character } from '../../types';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';

const mockStore = configureStore([])
const store = mockStore({data:[]})
beforeEach(() => {
  render(
    <Provider store={store}>
      <Cards  />
    </Provider>
  )
})

// test('loader on the document', () => {
//   expect(screen.getAllByTestId('cards_loader').length).not.toBe(0);
// });

// test('no characters by search', () => {
//   expect(screen.getByText(/No characters/i)).toBeInTheDocument();
// });

// test('cards on page', () => {
//   render(<Cards characters={CHARACTER_BY_ID_RESPONSE.docs as Character[]} />);
//   expect(screen.getByTestId('lotr_card')).toBeInTheDocument();
// });
