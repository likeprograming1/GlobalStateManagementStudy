import React, { createContext, useState } from "react";
import { ThemeContextType, ThemeProviderProps } from "./type";

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState("dark");
  const themes = {
    light: {
      background: "#fff",
      color: "#000",
    },
    dark: {
      background: "#171717",
      color: "#fff",
    },
  };

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const providerValue = {
    theme: themes[theme],
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
}
