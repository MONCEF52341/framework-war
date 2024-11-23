// src/contexts/ThemeContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [navbarColor, setNavbarColor] = useState(() => {
    const savedColor = localStorage.getItem('navbarColor');
    return savedColor || 'blue';
  });

  useEffect(() => {
    localStorage.setItem('navbarColor', navbarColor);
  }, [navbarColor]);

  return (
    <ThemeContext.Provider value={{ navbarColor, setNavbarColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

// src/components/ThemeSelector.jsx
