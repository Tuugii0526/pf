"use client";
import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ThemeToggle() {
  useIsMobile();
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
    <button
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 ${
        isDark
          ? "bg-blue-600 focus:ring-blue-300"
          : "bg-yellow-400 focus:ring-yellow-300"
      }`}
    >
      {/* Toggle Circle */}
      <div
        className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
          isDark ? "translate-x-8" : "translate-x-1"
        }`}
      >
        {/* Icon inside the toggle */}
        {isDark ? (
          <Moon className="w-4 h-4 text-blue-600" />
        ) : (
          <Sun className="w-4 h-4 text-yellow-500" />
        )}
      </div>
    </button>
  );
}
