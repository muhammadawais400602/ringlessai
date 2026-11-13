"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "light" | "dark";

const Ctx = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "light",
  toggle: () => {},
});

export function useXovraTheme() {
  return useContext(Ctx);
}

export function XovraThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("xovra-theme") as Theme | null;
      if (stored === "dark" || stored === "light") setTheme(stored);
      else if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      }
    } catch {}
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.querySelector(".xovra-root") as HTMLElement | null;
    if (root) root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("xovra-theme", theme);
    } catch {}
  }, [theme, mounted]);

  return (
    <Ctx.Provider value={{ theme, toggle: () => setTheme((t) => (t === "light" ? "dark" : "light")) }}>
      {children}
    </Ctx.Provider>
  );
}

export function ThemeToggle() {
  const { theme, toggle } = useXovraTheme();
  const isDark = theme === "dark";
  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="relative w-9 h-9 rounded-full border border-[var(--xv-border,rgba(0,0,0,0.1))] bg-[var(--xv-surface-elev,#ffffff)] hover:border-black/30 dark:hover:border-white/30 flex items-center justify-center overflow-hidden transition"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Moon size={15} className="text-[var(--xv-text,#0b0b0f)]" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Sun size={15} className="text-[var(--xv-text,#0b0b0f)]" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
