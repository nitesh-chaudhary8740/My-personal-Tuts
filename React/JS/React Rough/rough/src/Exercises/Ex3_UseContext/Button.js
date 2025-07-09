import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Button = () => {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ backgroundColor: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#333' }}>
      Click me!
    </button>
  );
};

export default Button;