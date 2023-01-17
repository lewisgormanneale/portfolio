import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./NavList.css";
import { IoMenu, IoMoon } from "react-icons/io5";

export default function NavList({ toggleScrollArrowVisibility }) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const toggleDarkMode = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      toggleDarkMode();
    } else {
      // Theme set to light.
    }
  }, []);

  const [navMenuVisibility, setNavMenuVisibility] =
    useState("nav-menu-container");

  function toggleNavMenuVisibility() {
    if (navMenuVisibility === "nav-menu-container") {
      setNavMenuVisibility("nav-menu-container active");
    } else {
      setNavMenuVisibility("nav-menu-container");
    }
  }

  return (
    <nav className="navlist">
      <div className={navMenuVisibility}>
        <ul
          className={`nav-menu ${
            darkMode ? "nav-menu-dark" : "nav-menu-light"
          }`}
        >
          <li>
            <a
              href="#projects"
              className="nav-link"
              onClick={toggleNavMenuVisibility}
            >
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a
              href="#about-me"
              className="nav-link"
              onClick={toggleNavMenuVisibility}
            >
              <span>About Me</span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="nav-link"
              onClick={toggleNavMenuVisibility}
            >
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
      <div
        onClick={toggleDarkMode}
        className={`dark-mode-toggle toggle ${
          darkMode ? "toggle-dark" : "toggle-light"
        }`}
      >
        <IoMoon />
      </div>
      <div
        onClick={toggleNavMenuVisibility}
        className={`menu-toggle toggle ${
          darkMode ? "toggle-dark" : "toggle-light"
        }`}
      >
        <IoMenu />
      </div>
    </nav>
  );
}
