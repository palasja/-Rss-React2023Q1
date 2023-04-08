import React from 'react';
import { screen, render } from '@testing-library/react';
import Cards from './cards';
import { CHARACTER_BY_ID_RESPONSE } from '../../mock/mockItems';
import { Character } from '../../types';

test('loader on the document', () => {
  render(<Cards characters={null} />);
  expect(screen.getAllByTestId('cards_loader').length).not.toBe(0);
});

test('no characters by search', () => {
  render(<Cards characters={[]} />);
  expect(screen.getByText(/No characters/i)).toBeInTheDocument();
});

test('cards on page', () => {
  render(<Cards characters={CHARACTER_BY_ID_RESPONSE.docs as Character[]} />);
  expect(screen.getByTestId('lotr_card')).toBeInTheDocument();
});
