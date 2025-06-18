"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useThemeStore } from "@/store/theme-store";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useThemeStore();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === "dark" && !isDarkMode) {
      useThemeStore.setState({ isDarkMode: true });
    } else if (theme === "light" && isDarkMode) {
      useThemeStore.setState({ isDarkMode: false });
    }
  }, [theme, isDarkMode]);

  const handleToggleTheme = () => {
    toggleTheme();
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <Button variant={"ghost"} size={"icon"} onClick={handleToggleTheme}>
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
