import React from "react";
import Container from "./Container";
import { NavEnglishData, NavSwedishData } from "../Data/Navbardata";
import { useLanguage } from "../context/LanguageContext";
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
          <div className=" flex p-12 justify-center gap-12 items-center ">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex  justify-center items-center gap-5"
                >
                  <p className=" font-medium  ">{item.title}</p>
                </div>
              );
            })}
          </div>
          <div className="p-2 flex justify-between">
            <div>
              <img src="/logo/logo.png" alt="" />
            </div>
            <div className="flex gap-16">
              <div className="flex gap-2">
                <div>
                  <img src="/Contact/icon1.png" alt="" />
                </div>
                <div>
                  <span>contact@preveu.com</span>
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <img src="/Contact/icon2.png" className="" alt="" />
                </div>
                <div>
                  <span>
                    Kungsgatan 8, <br /> 111 43 Stockholm, <br /> Sweden
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
