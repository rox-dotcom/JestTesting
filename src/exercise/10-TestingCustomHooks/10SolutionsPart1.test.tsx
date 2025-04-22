import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UseCounterHook } from './UseCounterHook'; 

test('starts at 0 and increments/decrements correctly', async () => {
  const user = userEvent.setup();
  render(<UseCounterHook />);

  const countDisplay = screen.getByRole('heading', { name: /count:/i });
  expect(countDisplay).toHaveTextContent('Count: 0');

  const incrementBtn = screen.getByRole('button', { name: /increment/i });
  const decrementBtn = screen.getByRole('button', { name: /decrement/i });

  await user.click(incrementBtn);
  expect(countDisplay).toHaveTextContent('Count: 1');

  await user.click(decrementBtn);
  expect(countDisplay).toHaveTextContent('Count: 0');
});
