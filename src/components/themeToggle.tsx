import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useThemeStore, initializeTheme } from "@/lib/store/themeStore";

/**
 * ThemeToggle Component
 * Provides a UI control to toggle between light and dark modes
 * using Zustand for state management
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  // Initialize theme on component mount
  useEffect(() => {
    initializeTheme();
  }, []);

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
