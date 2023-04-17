import React from 'react';
import { screen, render } from '@testing-library/react';
import ModalContent from './modalConent';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';

const mockStore = configureStore([])
const store = mockStore()
beforeEach(() => {
  render(
    <Provider store={store}>
      <ModalContent charId={''} onClose={() => {}} />
    </Provider>
  )
})

// test('close btn on page', () => {
//   expect(screen.getByTestId('close_modal')).toBeInTheDocument();
// });
