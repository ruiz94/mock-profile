'use client';
import React, { useEffect, useState, createContext } from 'react';

export type Theme = 'light' | 'dark';
type ThemeContextType = {
  children: React.ReactNode;
};
type ThemeContext = {
  theme: Theme;
  handleThemeSwitch: () => void;
};

export const ThemeContext = createContext<ThemeContext | null>(null);

export default function ThemeContextProvider({ children }: ThemeContextType) {
  const [theme, setTheme] = useState<Theme>('light');

  const handleThemeSwitch = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme;

    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, handleThemeSwitch }}>
      {children}
    </ThemeContext.Provider>
  );
}
