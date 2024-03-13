// Content.js
import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Content = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      greeting: "Hello! Welcome to our website.",
      about: "Learn more about us.",
      contact: "Contact us for more information.",
    },
    es: {
      greeting: "¡Hola! Bienvenido a nuestro sitio web.",
      about: "Aprende más sobre nosotros.",
      contact: "Contáctanos para obtener más información.",
    },
    fr: {
      greeting: "Bonjour! Bienvenue sur notre site web.",
      about: "En savoir plus sur nous.",
      contact: "Contactez-nous pour plus d'informations.",
    },
    de: {
      greeting: "Hallo! Willkommen auf unserer Webseite.",
      about: "Erfahren Sie mehr über uns.",
      contact: "Kontaktieren Sie uns für weitere Informationen.",
    },
    it: {
      greeting: "Ciao! Benvenuto sul nostro sito web.",
      about: "Scopri di più su di noi.",
      contact: "Contattaci per ulteriori informazioni.",
    },
  };

  return (
    <div className="flex flex-col justify-center p-5 items-center text-xl font-bold bg-gray-700 text-white">
      <h2>{translations[language].greeting}</h2>
      <p>{translations[language].about}</p>
      <p>{translations[language].contact}</p>
    </div>
  );
};

export default Content;
