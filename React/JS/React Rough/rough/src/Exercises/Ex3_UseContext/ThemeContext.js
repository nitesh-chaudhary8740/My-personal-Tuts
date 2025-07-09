import React from 'react';

// Create a context
const ThemeContext = React.createContext();

// Create a provider component
const ThemeProvider = ({ children }) => {
  const theme = 'dark'; // or 'light'
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };