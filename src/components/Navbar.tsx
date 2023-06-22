"use client";

import { useEffect, useState } from "react";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";

const initialThemeState = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme") as "light" | "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "dark";
};

export const Navbar = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(initialThemeState);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (!hasMounted) {
    return <>Cargando...</>;
  }

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="flex items-center space-x-2 mb-10">
      <h1 className="dark:text-white text-blue-950 text-4xl font-bold flex-grow">
        devfinder
      </h1>
      <span className="uppercase dark:text-white text-blue-950">
        {theme === "light" ? "dark" : "light"}
      </span>
      <button onClick={handleTheme}>
        {theme === "light" ? (
          <MoonIcon className="dark:fill-white fill-blue-950" />
        ) : (
          <SunIcon className="dark:fill-white fill-blue-950" />
        )}
      </button>
    </header>
  );
};
