// Header.js
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import LanguageSelector from "./Dropdown";

const Header = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <header>
      <nav className="flex min-h-22 p-5 justify-center ">
        <LanguageSelector language={language} changeLanguage={changeLanguage} />
      </nav>
      <h1 className="text-center text-[red] text-2xl  ">
        {language === "en" ? "Welcome" : ""}
        {language === "es" ? "Bienvenido" : ""}
        {language === "fr" ? "Bienvenue" : ""}
        {language === "de" ? "Willkommen" : ""}
        {language === "it" ? "Benvenuto" : ""}
      </h1>
    </header>
  );
};

export default Header;
