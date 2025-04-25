"use client";

import { ReactNode, useEffect } from "react";
import { useThemeStore } from "@/lib/store/themeStore";

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * ThemeProvider component
 * Handles theme hydration and initialization
 */
export default function ThemeProvider({ children }: ThemeProviderProps) {
  const { setTheme } = useThemeStore();

  // Handle theme initialization on client
  useEffect(() => {
    // Check for stored theme in localStorage
    const storedThemeData = localStorage.getItem("theme-storage");
    let theme: "light" | "dark" = "light";

    if (storedThemeData) {
      try {
        const parsedData = JSON.parse(storedThemeData);
        if (parsedData.state?.theme) {
          theme = parsedData.state.theme;
        }
      } catch (error) {
        console.error("Failed to parse theme data:", error);
      }
    } else {
      // Fall back to system preference
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      theme = systemPrefersDark ? "dark" : "light";
    }

    // Apply the theme
    setTheme(theme);
  }, [setTheme]);

  return <>{children}</>;
}
