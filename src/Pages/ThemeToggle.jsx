import React, { useContext } from 'react';
import { ThemeContext } from '../Shared/Pages/ThemeProvider';


const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`btn btn-primary ${isDarkMode ? 'dark' : 'light'}`}
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
