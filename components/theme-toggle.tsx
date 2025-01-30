"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md hover:scale-110 transition-transform"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-35 w-35" />
      ) : (
        <Moon className="h-35 w-35" />
      )}
    </button>
  );
};

export default ThemeToggle;
