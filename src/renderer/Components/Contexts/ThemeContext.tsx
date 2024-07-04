import React, { createContext, useContext, useState, useMemo } from 'react';

export type Theme = 'light' | 'dark';
export const themes: Theme[] = ['light', 'dark'];

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const storageTheme = localStorage.getItem('theme');
    return themes.includes(storageTheme as Theme)
      ? (storageTheme as Theme)
      : 'light';
  });
  function changeTheme(th: Theme) {
    localStorage.setItem('theme', th);
    setTheme(th);
  }
  const value = useMemo(
    () => ({
      theme,
      setTheme: changeTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
