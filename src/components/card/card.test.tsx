import React from 'react';
import { screen, render } from '@testing-library/react';
import Card from '.';
import items from '../../assets/items/items';
test('card image', () => {
  const item = items[0];
  render(<Card item={item} key={items[0].id} />);

  expect(screen.getByRole('img')).toBeInTheDocument();
  expect(screen.getByRole('img')).toHaveAttribute('alt');
});

test('card text content', () => {
  const item = items[0];
  render(<Card item={item} key={items[0].id} />);

  expect(screen.getByText(/rating/i)).toHaveTextContent(item.rating.toString());
  expect(screen.getByText(/Per Week/i)).toHaveTextContent(item.countPerWeek.toString());
  expect(screen.getByText(/Weight/i)).toHaveTextContent(item.weght.toString());
  expect(screen.getByText(/\$/i)).toHaveTextContent(item.cost.toString());
});

test('ml or gm for drink', () => {
  const item = items[0];
  render(<Card item={item} key={items[0].id} />);
  screen.debug();
  expect(screen.getByText(/Weight/i)).toHaveTextContent('ml');
});
