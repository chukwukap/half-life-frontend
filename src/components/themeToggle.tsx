import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { setWeb3ModalTheme } from "@/lib/blockchain/config";

/**
 * Theme mode type definition
 */
type ThemeMode = "light" | "dark";

/**
 * ThemeToggle Component
 * Provides a UI control to toggle between light and dark modes
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("light");

  // Check system preference on component mount
  useEffect(() => {
    // Check if user has a stored preference
    const storedTheme = localStorage.getItem("theme") as ThemeMode;

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
      setWeb3ModalTheme(storedTheme);
    } else {
      // If no stored preference, check system preference
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const initialTheme = systemPrefersDark ? "dark" : "light";

      setTheme(initialTheme);
      document.documentElement.classList.toggle(
        "dark",
        initialTheme === "dark"
      );
      setWeb3ModalTheme(initialTheme);
    }
  }, []);

  /**
   * Toggle between light and dark theme
   */
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    // Update state
    setTheme(newTheme);

    // Update Web3Modal theme
    setWeb3ModalTheme(newTheme);

    // Update document class for global theme application
    document.documentElement.classList.toggle("dark", newTheme === "dark");

    // Store preference
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label={
        theme === "light" ? "Switch to dark theme" : "Switch to light theme"
      }
    >
      {theme === "light" ? (
        <MoonIcon className="h-4 w-4" />
      ) : (
        <SunIcon className="h-4 w-4" />
      )}
    </Button>
  );
}

export default ThemeToggle;
