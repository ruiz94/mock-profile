import { ThemeContext } from '@/context/theme';
import React, { useContext } from 'react'

export default function useThemeContext() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error(
      'useThemeContext must be used within an ThemeContextProvider',
    );
  }

  return context
}
