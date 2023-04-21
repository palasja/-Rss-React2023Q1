import React from 'react';
import { screen, render } from '@testing-library/react';
import Home from './home';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/store';

test('count cards search value', async () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </BrowserRouter>
  );
  screen.debug();
  // await waitFor(() => screen.findByRole('form'));
  expect(screen.getByRole('heading')).toBeInTheDocument();

  // fireEvent.change(screen.getByPlaceholderText(/search/i), { target: { value: 'ar' } });
  // fireEvent.submit(screen.getByPlaceholderText(/search/i));
  // await waitFor(() => screen.getAllByTestId('lotr_card'));
  // expect(screen.getAllByTestId('lotr_card')).toHaveLength(13);
});

// test('load searchValue local storage', async () => {
//   const testValue = 'ar';
//   localStorage.setItem('searchValue', testValue);
//   render(
//     <BrowserRouter>
//       <Provider store={store}>
//         <Home />
//       </Provider>
//     </BrowserRouter>
//   );
//   fireEvent.submit(screen.getByPlaceholderText(/search/i));
//   await waitFor(() => screen.getAllByTestId('lotr_card'));
//   expect(screen.getAllByTestId('lotr_card')).toHaveLength(13);
// });
