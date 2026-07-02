import { createContext, useContext, useState } from "react";
import { translations } from "../data/translations";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("ru");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const toggleLang = () => setLang((prev) => (prev === "ru" ? "en" : "ru"));

  const t = translations[lang];

  return (
    <AppContext.Provider value={{ theme, toggleTheme, lang, toggleLang, t }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
