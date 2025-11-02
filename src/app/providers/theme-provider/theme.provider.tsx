import { useEffect, useState } from 'react';

import { type ThemeOptions } from '@/shared/ui';

import { type ThemeProviderProps } from './theme.types';
import { ThemeProviderContext } from './theme.context';

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  storageKey = 'spotify-explorer-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeOptions>(
    () => (localStorage.getItem(storageKey) as ThemeOptions) || defaultTheme
  );

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
    setTheme: (theme: ThemeOptions) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
