'use client';

import { useEffect, useState } from 'react';

import { type ThemeOptions } from '@/shared/ui';

import { type ThemeProviderProps } from './theme.types';
import { ThemeProviderContext } from './theme.context';

const isClient = typeof window === 'undefined';

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  storageKey = 'spotify-explorer-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeOptions>(() => {
    if (isClient) {
      return defaultTheme;
    }

    try {
      const storedTheme = localStorage.getItem(storageKey) as ThemeOptions;      
      return storedTheme || defaultTheme;
    } catch (error) {
      console.warn('Failed to load theme from localStorage:', error);
      return defaultTheme;
    }
  });

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme: ThemeOptions) => {
      setTheme(newTheme);

      if (!isClient) {
        try {
          localStorage.setItem(storageKey, newTheme);
        } catch (error) {
          console.warn('Failed to save theme to localStorage:', error);
        }
      }
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
