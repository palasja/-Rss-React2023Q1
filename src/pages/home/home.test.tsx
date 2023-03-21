import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Home from './home';
import items from '../../assets/items/items';
import { BrowserRouter } from 'react-router-dom';

test('count cards without search value', () => {
  const { container } = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  expect(container.getElementsByClassName('card').length).toBe(items.length);
});

test('load searchValue local storage and check count card', () => {
  const testValue = 'tea';
  localStorage.setItem('searchValue', testValue);
  const { container } = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  expect(container.getElementsByClassName('card').length).toBe(3);
});

test('filtre cards', () => {
  const testItem = items[0];
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  fireEvent.change(screen.getByPlaceholderText(/search/i), { target: { value: testItem.name } });
  expect(screen.getByAltText(new RegExp(testItem.name, 'i'))).toBeInTheDocument();
});
