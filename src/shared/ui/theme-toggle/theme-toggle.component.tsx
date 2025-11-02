'use client';

import { Button } from '@/shared/ui';
import { useTheme } from '@/core/providers';

import { getIcon } from './theme-toggle.helpers';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <Button
      variant="outline"
      kind="icon"
      onClick={handleToggleTheme}
      title={`Você está usando o tema "${theme}"`}
    >
      {getIcon(theme)}
      <span className="sr-only">Alternar tema</span>
    </Button>
  );
}
