import React from 'react';
import { screen, render } from '@testing-library/react';
import ModalContent from './modalConent';

test('close btn on page', () => {
  render(<ModalContent charId={''} onClose={() => {}} />);
  expect(screen.getByTestId('close_modal')).toBeInTheDocument();
});
