"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const emptySubscribe = () => () => {};

export default function ThemeToggle({ className = "" }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const isDark = mounted ? (theme === "dark" || resolvedTheme === "dark") : false;

  return (
    <button
      type="button"
      onClick={() => mounted && setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? (isDark ? "Switch to light theme" : "Switch to dark theme") : "Toggle theme"}
      title={mounted ? (isDark ? "Switch to light theme" : "Switch to dark theme") : "Toggle theme"}
      className={`relative w-10 h-10 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/80 hover:bg-slate-200/80 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-all duration-200 flex items-center justify-center cursor-pointer shadow-sm ${className}`}
    >
      {mounted ? (
        isDark ? (
          <MdLightMode className="text-xl text-amber-400 transition-transform duration-300 hover:rotate-90" aria-hidden="true" />
        ) : (
          <MdDarkMode className="text-xl text-slate-700 transition-transform duration-300 hover:-rotate-12" aria-hidden="true" />
        )
      ) : (
        <span className="w-5 h-5" aria-hidden="true" />
      )}
    </button>
  );
}
