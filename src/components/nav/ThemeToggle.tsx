"use client";
import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme == "dark";
  const toggleTheme = () => {
    setTheme((pre) => {
      if (pre == "dark") return "light" as string;
      if (pre == "light") return "dark" as string;
      return "light";
    });
  };
  return (
    <button onClick={toggleTheme}>
      {" "}
      {isDark ? (
        <Moon className="w-4 h-4 text-blue-600" />
      ) : (
        <Sun className="w-4 h-4 text-yellow-500" />
      )}
    </button>
  );
}
