import { ReactNode } from "react";

export type ThemeProviderProps = {
  children: ReactNode;
};

export type Theme = {
  background: string;
  color: string;
};

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
