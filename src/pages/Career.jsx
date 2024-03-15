import React from "react";
import Container from "../components/Container";
import { Link } from "react-scroll";
import { useLanguage } from "../context/LanguageContext";
import Button from "../components/Button";

const Career = () => {
  const { language } = useLanguage();
  return (
    <section id="career">
      <Container>
        <div className="container max-w-[1330px] mx-auto mt-16 flex justify-center flex-col ">
          <div
            className={`bg-[url('/Career/career.png')] rounded-xl  bg-center
           bg-cover bg-no-repeat p-5 flex flex-col min-h-72 justify-center gap-5`}
          >
            <div className="lg:px-36 flex gap-4">
              <div className="w-1 hidden lg:block bg-primary"></div>
              <div className="flex flex-col gap-3">
                <h1 className="fonta">
                  {language === "en" && "Join Us"}
                  {language === "swe" && "Bli Medlem"}
                </h1>
                <span className="fontb">
                  {language === "en" &&
                    "Join PrevHealth in revolutionizing healthcare through AI and technology. As leaders in digital healthcare consulting and health tech product design, we're committed to transforming healthcare delivery at scale."}

                  {language === "swe" &&
                    "Gå med i PrevHealth i att revolutionera hälso- och sjukvården genom AI och teknik. Som ledare inom digital hälsovårdsrådgivning och design av hälso- och sjukvårdsteknikprodukter är vi engagerade i att transformera hälso- och sjukvårdsleverans i stor skala."}
                </span>
              </div>
            </div>
            <div className="lg:px-36">
              <Button>Contact Us</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Career;
