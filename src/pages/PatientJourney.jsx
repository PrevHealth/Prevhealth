import React from "react";
import { useLanguage } from "../context/LanguageContext";
import Container from "../components/Container";
import {
  PatientJourneyEnglishData,
  PatientJourneySwedishData,
} from "../Data/PatientJourneyData";
import PatientJourneyCard from "../components/PatientJourneyCard";

const PatientJourney = () => {
  const { language, changeLanguage } = useLanguage();
  let data;

  switch (language) {
    case "en":
      data = PatientJourneyEnglishData;
      break;
    case "swe":
      data = PatientJourneySwedishData;
      break;
    default:
      data = PatientJourneyEnglishData; // Default to English if language not found
  }

  return (
    <section id="Patient-journey" className="mt-10">
      <Container>
        <h1 className="fonta text-primary">
          {language === "en" && "Patient Journey"}
          {language === "swe" && "Patientresa"}
        </h1>
      </Container>
      <div className="mt-10 flex flex-col gap-16 ">
        {data.map((item, index) => {
          return (
            <>
              <PatientJourneyCard data={item} key={item.id} />
            </>
          );
        })}
      </div>
    </section>
  );
};

export default PatientJourney;
