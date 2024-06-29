import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useTheme, themes, type Theme } from './Contexts/ThemeContext';

function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  const handleChange = (event: SelectChangeEvent<Theme>) => {
    // Cast the event target value to Theme type
    const selectedTheme = event.target?.value as Theme;
    setTheme(selectedTheme);
  };

  return (
    <FormControl className=" w-auto">
      <InputLabel>Theme</InputLabel>
      <Select
        value={theme}
        onChange={handleChange}
        // input={<OutlinedInput label="Name" />}
      >
        {themes.map((t) => (
          <MenuItem key={t} value={t}>
            {t} theme
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default ThemeSelector;
