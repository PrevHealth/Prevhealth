import React from "react";
import { useLanguage } from "../context/LanguageContext";
import Container from "../components/Container";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const CoustmerStory = () => {
  const { language } = useLanguage();
  return (
    <section id="Customer-journey" className="mb-10 ">
      <Container>
        <div className="flex justify-center items-center lg:flex-row flex-col-reverse">
          <div className="flex flex-col gap-5">
            <h1 className="fonta text-primary ">
              {language === "en" && "Transforming Women's Healthcare in Sweden"}
              {language === "swe" && "Förändra kvinnors hälsovård i Sverige"}
            </h1>
            <span className="fontb">
              {language === "en" &&
                "Streamlining healthcare delivery, saving time and resources for providers while ensuring prompt, high-quality care for patients."}
              {language === "swe" &&
                "Effektivare hälsovård, bättre patientupplevelse och nöjdare personal."}
            </span>
            <div>
              <Button>
                <Link
                  to={"/Customer"}
                  className="flex justify-center  text-white items-center"
                >
                  {language === "en" && "Customer story"}
                  {language === "swe" && "Kundberättelse"}
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:max-w-[50%] flex lg:justify-end">
            <img
              src={
                language === "swe"
                  ? "/CoustmerStory/swe.png"
                  : "/CoustmerStory/eng.png"
              }
              alt=""
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CoustmerStory;
