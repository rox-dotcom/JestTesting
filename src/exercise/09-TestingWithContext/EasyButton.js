import React from 'react';
import { useTheme } from './ThemeContext';

function EasyButton() {
  const { theme } = useTheme();

  const styles = {
    light: {
      background: 'white',
      color: 'black',
    },
    dark: {
      background: 'black',
      color: 'white',
    },
  };

  return (
    <button style={styles[theme]}>
      Easy Button
    </button>
  );
}

export default EasyButton;
