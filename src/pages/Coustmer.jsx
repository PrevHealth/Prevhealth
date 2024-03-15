import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { CoustmerEngData, CoustmerSweData } from "../Data/CoustmerData";
import Container from "../components/Container";

const Coustmer = () => {
  const { language } = useLanguage();

  let data;
  switch (language) {
    case "en":
      data = CoustmerEngData;
      break;
    case "swe":
      data = CoustmerSweData;
      break;
    default:
      data = CoustmerEngData; // Default to English if language not found
  }

  return (
    <div className="min-h-screen">
      <Container>
        <section className="pt-16 flex">
          <div>
            <h1>
              {language === "en" && "Customer story"}
              {language === "swe" && "Kundberättelse"}
            </h1>
            <img src="/Coustmer/mamamia.png" alt="" />
            <span>
              {language === "en" && "Transforming Women's Healthcare"}
              {language === "swe" && "Transformera kvinnors hälsovård"}
            </span>
            <span>
              {language === "en" &&
                "Explore how our healthtech platform revolutionized patient care for MamaMia, a Swedish women's healthcare organization offering OBGYN care, pregnancy care and child care services. With our innovative solutions, the MamaMia Hemma app and platform has made healthcare delivery more effective and convenient for both caregivers and patients."}
              {language === "swe" &&
                "Utforska hur vår healthtech-plattform revolutionerade patientvården för MamaMia, en svensk kvinnohälsovårdsorganisation som erbjuder OBGYN-vård, graviditetsvård och barnvårdstjänster. Med våra innovativa lösningar har MamaMia Hemma-appen och plattformen gjort vården mer effektiv och bekväm för både vårdgivare och patienter."}
            </span>
          </div>

          <div>
            <div>
              <img src="/Coustmer/location.png" alt="" />
              <span>
                {language === "en" && <span>
                     
                </span>}

              </span>
            </div>
            <div>
              <img src="/Coustmer/service.png" alt="" />
            </div>
          </div>
        </section>
      </Container>
      <section></section>
      <section></section>
    </div>
  );
};

export default Coustmer;
