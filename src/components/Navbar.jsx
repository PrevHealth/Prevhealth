import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { NavEnglishData, NavSwedishData } from "../Data/Navbardata";
import LanguageSelector from "./Dropdown";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import Meet from "./Meet";

const Navbar = () => {
  const { language, changeLanguage } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [show, setShow] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
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

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = document.querySelectorAll("section");
  //     const scrollPosition = window.scrollY + window.innerHeight / 2; // Check if the middle of the section is in the viewport
  //     let activeSectionId = null;

  //     sections.forEach((section) => {
  //       const sectionId = section.getAttribute("id");
  //       const top = section.offsetTop;
  //       const bottom = top + section.offsetHeight;

  //       if (scrollPosition >= top && scrollPosition < bottom) {
  //         activeSectionId = sectionId;
  //       }
  //     });

  //     const matchingNavItem = data.find(
  //       (item) => item.sectionId === activeSectionId
  //     );
  //     setActiveSection(matchingNavItem ? matchingNavItem.id : null);
  //   };

  //   // Set initial active section
  //   const sections = document.querySelectorAll("section");
  //   if (sections.length > 0) {
  //     const firstSectionId = sections[0].getAttribute("id");
  //     const firstNavItem = data.find(
  //       (item) => item.sectionId === firstSectionId
  //     );
  //     if (firstNavItem) {
  //       setActiveSection(firstNavItem.id);
  //     }
  //   }

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <nav className="flex lg:px-32 px-5 bg-white fixed py-3 z-[120] border-b-[3px] w-full justify-between items-center ">
        <div>
          <NavLink onClick={scrollToTop} to="/">
            <img className="w-32 lg:w-auto" src="/logo/logo.png" alt="" />
          </NavLink>
        </div>
        <div className="hidden  lg:flex gap-5">
          {data.map((item, index) => (
            <div key={index} className="flex group flex-col">
              {item.path === "/about-us" ? (
                <NavLink
                  to={item.path}
                  className={`font-medium ${
                    activeSection === item.id ? "active" : ""
                  }`}
                >
                  {item.title}
                </NavLink>
              ) : (
                <Link
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust this offset to suit your layout
                  duration={500}
                  to={item.to}
                  className={`font-medium ${
                    activeSection === item.id ? "active" : ""
                  }`}
                >
                  {item.title}
                </Link>
              )}
              <span
                className={`${
                  activeSection === item.id ? "w-full" : ""
                } h-[3px] bg-primary w-0 transition-all duration-300 group-hover:w-full`}
              ></span>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex gap-10 justify-center items-center">
          <div>
            <Button>
              <Meet />
            </Button>
          </div>
          <div>
            <LanguageSelector
              language={language}
              changeLanguage={changeLanguage}
            />
          </div>
        </div>
        <div className="lg:hidden flex gap-5">
          <div className="">
            <LanguageSelector
              language={language}
              changeLanguage={changeLanguage}
            />
          </div>
          <div className=" flex h-8 w-8">
            <button
              type="button"
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? (
                <img src="/Navbar/close.svg" alt="" />
              ) : (
                <img src="/Navbar/open.svg" alt="" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        onClick={() => {
          setShow(!show);
        }}
        className=""
      >
        {show && (
          <div className="bg-white lg:hidden rounded-2xl w-screen right-0 border fixed mt-14 ">
            <div className="pt-4">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col  font-semibold text-black text-[22px] p-3 "
                >
                  {item.path === "/about-us" ? (
                    <NavLink
                      to={item.path}
                      onClick={() => {
                        setShow(!show);
                      }}
                      className=" "
                    >
                      {item.title}
                    </NavLink>
                  ) : (
                    <Link
                      spy={true}
                      smooth={true}
                      offset={-100} // Adjust this offset to suit your layout
                      duration={500}
                      to={item.to}
                      className=""
                      onClick={() => {
                        setShow(!show);
                      }}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <div className="p-3">
                <Button>
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-100} // Adjust this offset to suit your layout
                    duration={500}
                    to={"demo"}
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    Book a Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
