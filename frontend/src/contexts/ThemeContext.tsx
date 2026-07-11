import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { DEFAULT_THEME, ThemeMode, THEME_STORAGE_KEY } from "@/config/theme";
import { storageService } from "@/services/storage/storage.service";

interface ThemeContextValue {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeMode>(
    () => storageService.get<ThemeMode>(THEME_STORAGE_KEY) || DEFAULT_THEME
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    storageService.set(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setThemeState((t) => (t === "light" ? "dark" : "light")),
      setTheme: setThemeState,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useThemeContext must be used within ThemeContextProvider");
  return ctx;
};
