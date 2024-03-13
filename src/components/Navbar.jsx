import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { NavEnglishData, NavSwedishData } from "../Data/Navbardata";
import LanguageSelector from "./Dropdown";
import { Link } from "react-scroll";
import Button from "./Button";
const Navbar = () => {
  const { language, changeLanguage } = useLanguage();

  let data;
  switch (language) {
    case "en":
      data = NavEnglishData;
      break;
    case "swe":
      data = NavSwedishData;
      break;
    default:
      data = NavEnglishData; // Default to English if language not found
  }

  return (
    <nav className="flex px-32 bg-white fixed py-3 z-[120] border-b-[3px] w-full justify-between items-center ">
      <div>
        <img src="/logo/logo.png" alt="" />
      </div>
      <div className="hidden  lg:flex gap-5">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col">
            <Link
              spy={true}
              smooth={true}
              offset={-70} // Adjust this offset to suit your layout
              duration={500}
              to={item.to}
              className="font-medium"
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>
      <div className="hidden lg:flex gap-10 justify-center items-center">
        <div>
          <Button>
            {language === "en" && "Book a demo"}
            {language === "swe" && "Boka en demo"}
          </Button>
        </div>
        <div>
          <LanguageSelector
            language={language}
            changeLanguage={changeLanguage}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
