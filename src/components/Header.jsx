import React, { useState, useEffect } from "react";
import logoDark from "../assets/logo-dark.svg";
import logoLight from "../assets/logo-light.svg";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("themeMode");
    if (storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleThemeToggle = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      localStorage.setItem("themeMode", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setIsDarkMode(true);
      localStorage.setItem("themeMode", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <header>
      <div id='header'>
        <nav>
          <a href='index.html' aria-label='Go to start page'>
            <img src={isDarkMode ? logoLight : logoDark} alt='Silicon logotype' />
          </a>
          <a href=''>Features</a>
        </nav>
        <div className='wrapper__toggle_signin'>
          <span id='toggle'>
            <span className='wrapper__darkmode'>Dark Mode</span>
            <input id='switch' type='checkbox' checked={isDarkMode} onChange={handleThemeToggle} />
            <label htmlFor='switch' className='switch'>
              toggle
            </label>
          </span>
          <a href='' className='button button__signin'>
            <span>Sign in / up</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
