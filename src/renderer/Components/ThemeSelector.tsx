import React from 'react';
import { useTheme, themes, type Theme } from './Contexts/ThemeContext';
import Dropdown from './Form/Dropdown';

function ThemeSelector() {
  const { setTheme } = useTheme();

  const handleChange = (th: String) => {
    const selectedTheme = th as Theme;
    setTheme(selectedTheme);
  };

  return (
    <Dropdown
      name="Theme"
      options={themes.map((t) => t)}
      onSelect={handleChange}
    />
  );
}

export default ThemeSelector;
