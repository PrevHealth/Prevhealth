import React from "react";
import Container from "./Container";
import { NavEnglishData, NavSwedishData } from "../Data/Navbardata";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const { language } = useLanguage();
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
    <div className="bg-[#E3ECED] mt-12 ">
      <Container>
        <section className="">
          <div className=" flex flex-col lg:flex-row  lg:p-12 p-5 lg:justify-center lg:gap-12 gap-4 lg:items-center ">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex  lg:justify-center lg:items-center lg:gap-5"
                >
                  {item.path == "/about-us" ? (
                    <NavLink to={item.path} className="font-medium">
                      {item.title}
                    </NavLink>
                  ) : (
                    <Link
                      to={item.to}
                      offset={-100}
                      smooth={true}
                      duration={500}
                      className=" font-medium  "
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
          <div className="p-2 flex flex-col mb-9 lg:mb-0  lg:flex-row justify-between">
            <div>
              <img src="/logo/logo.png" alt="" />
            </div>
            <div className="flex lg:flex-row flex-col-reverse gap-5 mt-9 lg:mt-0 lg:gap-16">
              <div className="flex gap-2">
                <div>
                  <img src="/Contact/icon1.png" alt="" />
                </div>
                <div>
                  <span>contact@preveu.com</span>
                </div>
              </div>
              <div className="flex lg:justify-center items-start gap-2">
                <div>
                  <img src="/Contact/icon2.png" className="" alt="" />
                </div>
                <div>
                  <span className="">
                    Idungränd 8, <br /> 187 73 Täby <br /> Sweden
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-[2px] bg-black "></div>
          <div className="flex justify-between px-3 p-1">
            <span>
              <p className="text-center  text-primary">
                {language === "en" && "© 2021 All rights reserved"}
                {language === "swe" && "© 2021 Alla rättigheter förbehållna"}
              </p>
            </span>
            <span>
              <img src="/footer/icon1.png" alt="" />
            </span>
          </div>
        </section>
        <div className=""></div>
      </Container>
    </div>
  );
};

export default Footer;
