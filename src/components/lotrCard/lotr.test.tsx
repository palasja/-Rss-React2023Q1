import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../store/store';
import LotrCardProp from './index';
import { vi } from 'vitest';

test('call function by click on element', () => {
  const func = vi.fn();
  render(
    <MemoryRouter>
      <Provider store={store}>
        <LotrCardProp id={''} name={''} race={''} wikiUrl={''} clickAction={func} />
      </Provider>
    </MemoryRouter>
  );

  fireEvent.click(screen.getByTestId('lotr_card'));
  expect(func.mock.calls).toHaveLength(1);
});

test('change NaN to undefined', () => {
  const func = vi.fn();
  render(
    <MemoryRouter>
      <Provider store={store}>
        <LotrCardProp id={''} name={''} race={'NaN'} wikiUrl={''} clickAction={func} />
      </Provider>
    </MemoryRouter>
  );

  expect(screen.queryByText('NaN')).not.toBeInTheDocument();
});
