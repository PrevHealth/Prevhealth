import React from "react";
import { DemoEnglishData, DemoSwedishData } from "../Data/DemoData";
import { useLanguage } from "../context/LanguageContext";
import Container from "../components/Container";
import Button from "../components/Button";
import Meet from "../components/Meet";

const Demo = () => {
  const { language } = useLanguage();
  let data;
  switch (language) {
    case "en":
      data = DemoEnglishData;
      break;
    case "swe":
      data = DemoSwedishData;
      break;
    default:
      data = DemoEnglishData; // Default to English if language not found
  }
  return (
    <Container>
      <section className="p-5 lg:p-10 border-[2px] rounded-xl mt-12 flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row justify-center  items-center">
        <div className="w-full  ">
          <div className="text-[24px] font-semibold text-primary">
            {language === "en" && "Let's Revolutionize Healthcare. Together."}
            {language === "swe" && "Låt oss revolutionera vården. Tillsammans."}
          </div>
          <div className="mt-1">
            {language === "en" && (
              <span className="font-semibold text-[24px] text-secondary ">
                Boost Efficiency <br />
                Reduce Costs <br /> Empower
              </span>
            )}
            {language === "swe" && (
              <span className="font-semibold text-[24px] text-secondary ">
                Öka effektiviteten <br />
                Minska kostnaderna <br /> Befordra
              </span>
            )}
          </div>
          <div className="mt-3">
            <Button>
              <Meet />
            </Button>
          </div>
        </div>
        <div className="w-full flex lg:justify-end justify-center  ">
          <img src="/Demo/icon1.png" alt="" />
        </div>
      </section>
    </Container>
  );
};

export default Demo;
