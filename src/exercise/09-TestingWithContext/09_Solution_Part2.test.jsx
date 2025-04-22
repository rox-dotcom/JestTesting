import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EasyButton from './EasyButton';
import { ThemeProvider } from './ThemeContext';


function renderWithProviders(ui, { theme = 'light', ...options } = {}) {
  function Wrapper({ children }) {
    return <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>;
  }

  return render(ui, { wrapper: Wrapper, ...options });
}


test('renders EasyButton with light theme', () => {
  renderWithProviders(<EasyButton />, { theme: 'light' });

  const button = screen.getByRole('button');
  expect(button).toHaveStyle({ backgroundColor: 'white', color: 'black' });
});

test('renders EasyButton with dark theme', () => {
  renderWithProviders(<EasyButton />, { theme: 'dark' });

  const button = screen.getByRole('button');
  expect(button).toHaveStyle({ backgroundColor: 'black', color: 'white' });
});
