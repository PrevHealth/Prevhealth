import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { CoustmerEngData, CoustmerSweData } from "../Data/CoustmerData";
import Container from "../components/Container";
import SecNav from "../components/SecNav";

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
    <div className="">
      <SecNav />
      <section className="min-h-screen bg-[#E3ECED] pb-5">
        <Container>
          <section className="pt-16 lg:pt-24 flex  justify-center bg-blac lg:flex-row flex-col lg:gap-20  gap-10">
            <div className="flex flex-col gap-8 lg:gap-10 mt-5 w-full">
              <h1 className="fontb text-primary">
                {language === "en" && "Customer story"}
                {language === "swe" && "Kundberättelse"}
              </h1>
              <img className="w-48" src="/Coustmer/mamamia.png" alt="" />
              <span className="text-[32px] lg:text-[40px] font-bold text-primary">
                {language === "en" && "Transforming Women's Healthcare"}
                {language === "swe" && "Transformera kvinnors hälsovård"}
              </span>
              <span className="fontb">
                {language === "en" &&
                  "Explore how our healthtech platform revolutionized patient care for MamaMia, a Swedish women's healthcare organization offering OBGYN care, pregnancy care and child care services. With our innovative solutions, the MamaMia Hemma app and platform has made healthcare delivery more effective and convenient for both caregivers and patients."}
                {language === "swe" &&
                  "Utforska hur vår healthtech-plattform revolutionerade patientvården för MamaMia, en svensk kvinnohälsovårdsorganisation som erbjuder OBGYN-vård, graviditetsvård och barnvårdstjänster. Med våra innovativa lösningar har MamaMia Hemma-appen och plattformen gjort vården mer effektiv och bekväm för både vårdgivare och patienter."}
              </span>
            </div>

            <div className="flex flex-col gap-10 lg:w-ful lg:w-1/2 lg:justify-center ">
              <div className="flex  gap-3 ">
                <div>
                  <img src="/Coustmer/location.png" alt="" />
                </div>
                <span>
                  {language === "en" && (
                    <span className="text-secondary text-[20px]">
                      Location
                      <br />
                      <b className="text-primary">Sweden</b>
                    </span>
                  )}
                  {language === "swe" && (
                    <span className="text-secondary text-[20px]">
                      Plats
                      <br />
                      <b className="text-primary">Sverige</b>
                    </span>
                  )}
                </span>
              </div>
              <div className="flex gap-3   ">
                <div>
                  <img src="/Coustmer/service.png" alt="" />
                </div>
                <div className="flex justify-center items-center ">
                  <span className="">
                    {language === "en" && (
                      <span className="text-secondary text-[20px]">
                        Service
                        <br />
                        <b className="text-primary">Women’s health</b>
                      </span>
                    )}
                    {language === "swe" && (
                      <span className="text-secondary text-[20px]">
                        Service
                        <br />
                        <b className="text-primary">
                          Kvinnors  hälsa
                        </b>
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </section>

      <section>
        <Container>
          <div className="flex flex-col gap-8">
            {data.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`flex flex-col-reverse ${
                    item.id == 2 ? "lg:flex-row-reverse" : "lg:flex-row"
                  } gap-10 mt-5`}
                >
                  <div className="w-full flex flex-col gap-4">
                    <div>
                      <h1 className="fonta italic">{item.heading}</h1>
                      <h1 className="fonta text-secondary">{item.Question1}</h1>
                    </div>
                    <div className="fontb flex flex-col gap-8">
                      <span className="">{item?.Answer1}</span>
                      <span>{item.Answer2}</span>
                      <span>{item.Answer3}</span>
                    </div>
                  </div>
                  <div className="w-full flex justify-center items-center lg:items-end ">
                    <img src={item.icon} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="flex justify-center items-start bg-[#FDC2B5] lg:p-10 p-6 mt-5 mb-5 fontb rounded-lg  ">
            {language === "en" &&
              "With a range of services available, including OBGYN care, pregnancy care, and child care, females across Sweden can receive comprehensive healthcare support when they need it, where they need it."}
            {language === "swe" &&
              "Med ett utbud av tjänster tillgängliga, inklusive OBGYN-vård, graviditetsvård och barnomsorg, kan kvinnor över hela Sverige få omfattande hälsovårdsstöd när de behöver det, var de än behöver det."}
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="flex lg:flex-row flex-col-reverse gap-10 mt-10">
            <div className="flex justify-center fontb items-center w-full">
              <span>
                {language === "en" &&
                  "Caregivers conduct consultations via audio, video calls, or chat, and may recommend in-person visits if necessary. Follow-up consultations are easily managed through the app, along with pill intake tracking and ongoing support. "}
                {language === "swe" &&
                  "Vårdgivare genomför konsultationer via ljud-, video samtal eller chatt och kan rekommendera personliga besök vid behov. Uppföljningskonsultationer hanteras enkelt genom appen, tillsammans med spårning av pillerintag och kontinuerligt stöd."}
              </span>
            </div>
            <div className="w-full flex lg:justify-end justify-center">
              <img src="/Coustmer/icon3.png" alt="" />
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-[#F7F7FB] pb-5 ">
        <Container>
          <div className="flex lg:flex-row flex-col gap-10  ">
            <div className="w-full flex flex-col gap-5 justify-center">
              <h1 className="fonta italic mt-5 lg:mt-0 text-primary">
                {language === "en" && "The Results"}
                {language === "swe" && "Resultaten"}
              </h1>
              <span className="fontb ">
                {language === "en" &&
                  "The MamaMia Hemma app has revolutionized healthcare for 500k+ patients in its first year. It has helped the organisation save costs through enhanced efficiency and digital healthcare delivery, streamlining processes for caregivers and empowering patients."}
                {language === "swe" &&
                  "MamaMia Hemma-appen har revolutionerat vården för 500k+ patienter under sitt första år. Den har hjälpt organisationen att spara kostnader genom förbättrad effektivitet och digital vårdleverans, vilket effektiviserar processer för vårdgivare och ger patienter möjlighet."}
              </span>
            </div>
            <div className="flex flex-col items-end gap-5 mt-5 ">
              <div className="bg-white w-fit p-3">
                <h1 className="fonta  text-center flex flex-col ">
                  {language === "en" && "500k+"}
                  {language === "swe" && "500k+"}
                </h1>
                <span className="fontb">
                  {language === "en" &&
                    "Users served by the app and platform in Year 1 of operationsUsers served by the app and platform in Year 1 of operations"}
                  {language === "swe" &&
                    "Användare som betjänas av appen och plattformen under år 1 av verksamheten"}
                </span>
              </div>
              <div className="bg-white w-fit flex flex-col p-3">
                <h1 className="fonta text-center">
                  {language === "en" && ">40%"}
                  {language === "swe" && ">40%"}
                </h1>
                <span className="fontb">
                  {language === "en" && "Costs saved by MamaMia"}
                  {language === "swe" && "Kostnader som MamaMia sparade"}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Coustmer;
