import React from 'react';
import { useTheme, themes, type Theme } from './Contexts/ThemeContext';
import Dropdown from './Dropdown';

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
    // <FormControl className=" w-auto">
    //   <InputLabel>Theme</InputLabel>
    //   <Select
    //     value={theme}
    //     onChange={handleChange}
    //     // input={<OutlinedInput label="Name" />}
    //   >
    //     {themes.map((t) => (
    //       <MenuItem key={t} value={t}>
    //         {t} theme
    //       </MenuItem>
    //     ))}
    //   </Select>
    // </FormControl>
  );
}

export default ThemeSelector;
