import { create } from "zustand";
import { persist } from "zustand/middleware";
import { setWeb3ModalTheme } from "@/lib/blockchain/config";

export type ThemeMode = "light" | "dark";

interface ThemeState {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

/**
 * Theme store using Zustand for state management
 * Persists theme preference in localStorage
 */
export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "light",

      setTheme: (newTheme: ThemeMode) => {
        // Set theme in state
        set({ theme: newTheme });

        // Apply theme to document
        if (typeof document !== "undefined") {
          document.documentElement.classList.toggle(
            "dark",
            newTheme === "dark"
          );
        }

        // Update Web3Modal theme
        setWeb3ModalTheme(newTheme);
      },

      toggleTheme: () => {
        const currentTheme = get().theme;
        const newTheme = currentTheme === "light" ? "dark" : "light";
        get().setTheme(newTheme);
      },
    }),
    {
      name: "theme-storage",
      skipHydration: true, // Important for SSR
    }
  )
);

// Initialize theme on client side
export const initializeTheme = () => {
  if (typeof window !== "undefined") {
    // Get theme from store, system preference, or default to light
    const storedTheme = localStorage.getItem("theme-storage")
      ? JSON.parse(localStorage.getItem("theme-storage") || "{}").state?.theme
      : undefined;

    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = storedTheme || (systemPrefersDark ? "dark" : "light");

    // Set the theme
    useThemeStore.getState().setTheme(initialTheme);
  }
};
