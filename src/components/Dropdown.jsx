import React, { useState, useEffect, useRef } from "react";

const LanguageSelector = ({ language, changeLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const languages = [
    { code: "en", name: "English", flag: "gb" },
    { code: "swe", name: "Swedish", flag: "se" },
    // { code: "es", name: "Español", flag: "es" },
    // { code: "fr", name: "Français", flag: "fr" },
    // { code: "de", name: "Deutsch", flag: "de" },
    // { code: "it", name: "Italiano", flag: "it" },
  ];

  const handleLanguageChange = (languageCode) => {
    changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border-gray-300 bg-white  text-sm font-medium text-gray-700 focus:outline-none focus:rin focus:ring-indigo-00 focus:border-indig-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex justify-center items-center gap-1">
            <img
              className="size-8 rounded-full object-cover"
              src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/${
                languages.find((lang) => lang.code === language).flag
              }.svg`}
              alt={language}
            />
            <span className="font-bold text-md"></span>
            <img src="/flags/downarrow.png" className="w-2" alt="" />
          </div>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2  flex  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className=" flex flex-col p-2 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {languages
              .filter((lang) => lang.code !== language)
              .map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                  role="menuitem"
                >
                  <div className="flex justify-center items-center gap-2 ">
                    <img
                      className="w-5 h-5"
                      src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/${lang.flag}.svg`}
                      alt={lang.code}
                    />
                    <span className="">{lang.name}</span>
                  </div>
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
