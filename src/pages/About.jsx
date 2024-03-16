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
        <div className="w-full flex flex-col p-5 justify-center items-start gap-10 lg:px-32  ">
          <div>
            <h1 className="text-primary text-[48px] font-bold">
              {language === "en" && "About PrevHealth"}
              {language === "swe" && "Om PrevHealth"}
            </h1>
          </div>
          <div>
            <span className="text-[22px] font-medium text-primary leading-10 ">
              {language === "en" &&
                "PrevHealth is committed to driving healthcare forward. By providing a foundation for AI integration and prioritizing efficiency and patient-centered care, we empower organizations to evolve their current healthcare offering into a seamless digital experience."}
              {language === "swe" &&
                "PrevHealth är engagerat i att driva hälso- och sjukvården framåt. Genom att tillhandahålla en grund för AI-integration och prioritera effektivitet och patientcentrerad vård, ger vi organisationer möjlighet att utveckla sitt nuvarande vårdutbud till en sömlös digital upplevelse."}
            </span>
          </div>
          <div>
            <Button>
              <Link to="contact" smooth={true} offset={-100} duration={500}>
                {language === "en" && "Contact Us"}
                {language === "swe" && "Kontakta oss"}
              </Link>{" "}
            </Button>
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
