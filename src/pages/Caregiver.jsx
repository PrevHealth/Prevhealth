import React, { useState } from "react";
import Container from "../components/Container";
import { useLanguage } from "../context/LanguageContext";
import { CaregiverEngData, CaregiverSweData } from "../Data/CaregiverData";

const Caregiver = () => {
  const { language } = useLanguage();
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  let data;
  let images;

  switch (language) {
    case "en":
      data = CaregiverEngData;
      images = CaregiverEngData.map((item) => item.Image);
      break;
    case "swe":
      data = CaregiverSweData;
      images = CaregiverSweData.map((item) => item.Image);
      break;
    default:
      data = CaregiverEngData; // Default to English if language not found
      images = CaregiverEngData.map((item) => item.Image);
  }

  const handleQuestionClick = (index) => {
   setSelectedQuestion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mb-10">
      <Container>
        <h1 className="fonta text-primary mt-5 mb-10  ">Caregiver Journey</h1>
        <div className="flex flex-col-reverse lg:flex-row gap-10">
          <div className="w-full flex gap-10 flex-col">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col rounded-2xl bg-[#F7F7FB] p-2"
                onClick={() => handleQuestionClick(index)}
              >
                <span className="text-[24px] font-semibold text-primary">{item.question}</span>
                {selectedQuestion === index && <span className="fontb mt-3" >{item.answer}</span>}
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center  items-center rounded-xl ">
            <img src={images[selectedQuestion || 0]} className="" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Caregiver;
