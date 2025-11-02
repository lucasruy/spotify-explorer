import type { ThemeOptions } from "@/shared/ui";

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: ThemeOptions;
  storageKey?: string;
};

export type ThemeProviderState = {
  theme: ThemeOptions;
  setTheme: (theme: ThemeOptions) => void;
};
