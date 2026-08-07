import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "theme";
const THEMES = ["light", "dark", "system"];

const ThemeContext = createContext(null);

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const readStoredTheme = () => {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return THEMES.includes(stored) ? stored : "system";
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(readStoredTheme);
  const resolvedTheme = theme === "system" ? getSystemTheme() : theme;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", resolvedTheme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, resolvedTheme]);

  useEffect(() => {
    if (theme !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      document.documentElement.setAttribute("data-theme", getSystemTheme());
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [theme]);

  const value = useMemo(() => ({ theme, resolvedTheme, setTheme }), [theme, resolvedTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

export { ThemeProvider, useTheme };
