import { Sun, Moon } from "lucide-react";

import type { ThemeOptions } from "./theme-toggle.types";

export  const getIcon = (theme: ThemeOptions) => {
  const themesDictionary = {
    'light': <Sun className="h-4 w-4" />,
    'dark': <Moon className="h-4 w-4" />,
  }
  
  return themesDictionary[theme] || themesDictionary.dark;
};
