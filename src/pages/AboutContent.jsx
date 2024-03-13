// AboutContent.js
import React from "react";
import {
  EnglishData,
  GermanData,
  FrenchData,
  SpanishData,
  ItalianData,
} from "../Data/AboutData"; // Import data for each language
import { useLanguage } from "../context/LanguageContext";

const AboutContent = () => {
  const { language } = useLanguage();

  // Select the appropriate data based on the language
  let data;
  switch (language) {
    case "en":
      data = EnglishData;
      break;
    case "de":
      data = GermanData;
      break;
    case "fr":
      data = FrenchData;
      break;
    case "es":
      data = SpanishData;
      break;
    case "it":
      data = ItalianData;
      break;
    default:
      data = EnglishData; // Default to English if language not found
  }

  return (
    <div className="flex gap-3 flex-col justify-center items-center bg-green-800 p-5 text-white ">
      <h2>About Us</h2>
      {data.map((item, index) => (
        <div key={index} className="flex flex-col">
          <h3>{item.title}</h3>
          <p>{item.subtext}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutContent;
