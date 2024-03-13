import React from "react";
import Container from "../components/Container";
import LanguageSelector from "../components/Dropdown";
import { useLanguage } from "../context/LanguageContext";
import Button from "../components/Button";
import { HeropageEnglishData, HeropageSwedishData } from "../Data/HeropageData";

const Heropage = () => {
  const { language, changeLanguage } = useLanguage();

  let data;
  switch (language) {
    case "en":
      data = HeropageEnglishData;
      break;
    case "swe":
      data = HeropageSwedishData;
      break;
    default:
      data = HeropageEnglishData; // Default to English if language not found
  }

  return (
    <section className="bg-[#E3ECED]  min-h-screen w-screen">
      <div className="flex justify-between items-center ">
        <div className=" flex flex-col justify-center gap-8 w-full bg-blac  pl-32  ">
          <div className="">
            {language === "en" && (
              <span className="text-[48px] font-bold text-primary">
                Revolutionize Patient Care <br /> with
                <span className="ml-3 text-secondary ">
                  AI-powered Healthcare
                </span>
              </span>
            )}
            {language === "swe" && (
              <span className="text-[48px] font-bold text-primary">
                Revolutionera Patientvård <br /> med
                <span className="ml-3 text-secondary ">
                  AI-driven Hälsovård
                </span>
              </span>
            )}
          </div>
          <div className="text-[22px]">
            {language === "en" && (
              <span className="font-medium">
                PrevHealth empowers healthcare providers to deliver <br />{" "}
                exceptional care. Our B2B platform streamlines workflows, <br />{" "}
                optimizes resources, and personalizes the patient <br />{" "}
                experience. Unlock the power of AI for a future-proof <br />{" "}
                healthcare ecosystem.
              </span>
            )}
            {language === "swe" && (
              <span className="font-medium">
                PrevHealth ger vårdgivare möjlighet att leverera <br />{" "}
                exceptionell vård. Vår B2B-plattform effektiviserar <br />{" "}
                arbetsflöden, optimerar resurser och personaliserar <br />{" "}
                patientupplevelsen. Lås upp kraften i AI för ett <br />{" "}
                framtidssäkrat vård-ekosystem.
              </span>
            )}
          </div>
          <div className=""></div>
          <div>
            <Button>
              {language === "en" && "Book a demo"}
              {language === "swe" && "Boka en demo"}
            </Button>
          </div>
        </div>
        <div className="w-full  flex bg-blac justify-end items-center ">
          <img src="/Home/home.png" className="mt-20 object-cover" alt="" />
        </div>
      </div>
      <div>
        <Container>
          <div className="flex justify-between flex-col lg:flex-row items-center gap-10 mt-5 lg:-mt-10 ">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col lg:w-auto items-center rounded-xl bg-white p-3 justify-center gap-2"
              >
                <span className="text-[30px] font-bold text-primary">
                  {item.text}
                </span>
                <span className="text-[16px] font-medium">{item.subtext}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Heropage;
