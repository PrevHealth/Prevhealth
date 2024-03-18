import React from "react";
import Button from "../components/Button";
import { useLanguage } from "../context/LanguageContext";
import Career from "./Career";
import Contact from "./Contact";
import { Link } from "react-scroll";
import SecNav from "../components/SecNav";
import SecFooter from "../components/SecFooter";
const About = () => {
  const { language } = useLanguage();
  return (
    <>
      <SecNav />
      <section className="min-h-screen  pt-16 flex flex-col-reverse lg:flex-row text-[#F4F7FA] ">
        <div className="w-full flex flex-col p-5 justify-center items-start gap-5 lg:px-32  ">
          <div>
            <h1 className="text-primary text-[48px] font-bold">
              {language === "en" && "About PrevHealth"}
              {language === "swe" && "Om PrevHealth"}
            </h1>
          </div>
          <div>
            <span className="text-[22px] font-medium text-primary leading-10 ">
              {language === "en" &&
                "PrevHealth, a company built by European medical professionals and technologists, is committed to driving healthcare forward throughout Europe. We understand the unique needs of the European healthcare industry and are dedicated to providing solutions that prioritise efficiency, patient-centered care, and a seamless digital experience. Our foundation in AI integration empowers organizations to evolve their current healthcare offerings and meet the future of European healthcare head-on."}
              {language === "swe" &&
                "PrevHealth, ett företag byggt av europeiska medicinska yrkesverksamma och teknologer, är engagerat i att driva hälso- och sjukvården framåt i hela Europa. Vi förstår de unika behoven i den europeiska hälso- och sjukvårdsbranschen och är dedikerade till att tillhandahålla lösningar som prioriterar effektivitet, patientcentrerad vård och en sömlös digital upplevelse. Vår grund i AI-integration ger organisationer möjlighet att utveckla sina nuvarande hälso- och sjukvårdsutbud och möta framtiden för europeisk hälso- och sjukvård."}
            </span>
          </div>
        </div>
        <div className="w-full flex justify-center  lg:justify-end">
          <img src="/Home/home.png" alt="" />
        </div>
      </section>
      <section>
        <Career />
        <Contact />
        <SecFooter />
      </section>
    </>
  );
};

export default About;
