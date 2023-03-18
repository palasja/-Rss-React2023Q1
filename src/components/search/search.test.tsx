import React from 'react';
import { screen, render } from '@testing-library/react';
import Search from './search';

test('prop searchvalue in searchbar', () => {
  const testValue = 'Test';
  render(
    <Search
      onChange={function (newValue: string): void {
        throw new Error(`Function not implemented. ${newValue}`);
      }}
      curSearchValue={testValue}
    />
  );

  expect(screen.getByPlaceholderText(/search/i)).toHaveDisplayValue(testValue);
});
