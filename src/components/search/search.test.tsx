import React from 'react';
import { screen, render } from '@testing-library/react';
import Search from './search';

test('prop searchvalue in searchbar', () => {
  const testValue = 'Test';
  render(<Search curSearchValue={testValue} onSubmit={() => {}} />);

  expect(screen.getByPlaceholderText(/search/i)).toHaveDisplayValue(testValue);
});
