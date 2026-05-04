"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 left-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-lg text-gray-800 dark:text-gray-200 hover:scale-110 transition-all duration-300 group"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <Sun className="w-6 h-6 text-yellow-400 group-hover:rotate-90 transition-transform duration-500" />
      ) : (
        <Moon className="w-6 h-6 text-brand-600 group-hover:-rotate-12 transition-transform duration-500" />
      )}
    </button>
  );
}
