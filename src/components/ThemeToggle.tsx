"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";

/**
 * Theme toggle between the paper (light) theme and the dark ink theme.
 * The chosen theme persists in localStorage and is applied before paint
 * by an inline script in the locale layout, so there is no flash.
 */
export function ThemeToggle() {
  const t = useTranslations("nav");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // One-shot sync with the pre-paint theme script. The attribute is set on
    // the html element before hydration, so it cannot live in initial state.
    // eslint-disable-next-line
    setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // localStorage unavailable: theme simply does not persist
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={t("themeToggle")}
      aria-pressed={isDark}
      className="text-soft hover:text-ink transition-colors"
    >
      {isDark ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
    </button>
  );
}
