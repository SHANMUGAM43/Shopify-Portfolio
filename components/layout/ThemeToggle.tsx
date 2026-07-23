"use client";

import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";

type Theme = "dark" | "light";

const THEME_KEY = "portfolio-theme";
const listeners = new Set<() => void>();

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("dark", "light");
  root.classList.add(theme);
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
}

function emitThemeChange() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getThemeSnapshot(): Theme {
  if (typeof document === "undefined") {
    return "dark";
  }

  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function getServerThemeSnapshot(): Theme {
  return "dark";
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}

export function ThemeToggle({ mobile = false }: { mobile?: boolean }) {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, getServerThemeSnapshot);
  const nextTheme = theme === "dark" ? "light" : "dark";

  const handleToggle = () => {
    const updatedTheme = theme === "dark" ? "light" : "dark";
    applyTheme(updatedTheme);
    window.localStorage.setItem(THEME_KEY, updatedTheme);
    emitThemeChange();
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`group inline-flex items-center rounded-full border border-white/10 bg-white/5 text-zinc-200 backdrop-blur-xl transition-all duration-300 hover:border-purple-400/40 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${
        mobile ? "px-4 py-2.5 text-sm" : "px-3 py-2 text-sm"
      }`}
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === "light"}
      title={`Switch to ${nextTheme} mode`}
    >
      <span className="relative flex h-6 w-11 items-center rounded-full bg-black/25 p-1 transition-colors duration-300 group-hover:bg-black/35 dark:bg-black/30 light:bg-black/5">
        <motion.span
          animate={{ x: theme === "light" ? 18 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
          className="absolute h-4 w-4 rounded-full bg-white shadow-sm shadow-black/20"
        />
        <span className="relative z-10 flex w-full items-center justify-between text-[10px]">
          <span className="text-amber-300">
            <SunIcon />
          </span>
          <span className="text-sky-200">
            <MoonIcon />
          </span>
        </span>
      </span>
      <span className="ml-2.5 font-medium tracking-wide">{theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
}