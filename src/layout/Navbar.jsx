import { useState } from "react";
import { useApp } from "../context/AppContext";
import "./Navbar.scss";
import { navbarLinks } from "../data/navbar.js";

export default function Navbar() {
  const { theme, toggleTheme, lang, toggleLang, t } = useApp();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
        {navbarLinks.map((key) => (
          <li key={key}>
            <a
              href={`#${key}`}
              onClick={() => setMenuOpen(false)}
            >
              {t.nav[key]}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-controls">
        <button
          className="ctrl-btn"
          onClick={toggleLang}
          title="Switch language"
        >
          {lang === "ru" ? "EN" : "RU"}
        </button>

        <button
          className="ctrl-btn"
          onClick={toggleTheme}
          title="Toggle theme"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        <button
          className={`burger ${menuOpen ? "burger--active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Открыть меню"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}