import React from "react";
import Container from "./Container";
import Button from "./Button";

const PatientJourneyCard = ({ data }) => {
  return (
    <div className="bg-[#F7F7FB]">
      <Container>
        <section
          className={`flex flex-col-reverse ${
            data.id % 2 == 0 ? "lg:flex-row-reverse  " : "lg:flex-row"
          } `}
        >
          <div className="flex flex-col w-full justify-center">
            <div>
              {data.title && (
                <span className="text-secondary text-[24px] font-bold ">
                  {data.title}
                </span>
              )}
            </div>
            <div className="mt-8">
              {data.subtext && (
                <span className="text-[20px] fontb font-normal">
                  {data.subtext}
                </span>
              )}
            </div>
          </div>
          <div
            className={`flex justify-center items-center ${
              data.id % 2 == 0 ? "lg:justify-start" : "lg:justify-end"
            } w-full  `}
          >
            <img src={data.icon} alt="" />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default PatientJourneyCard;
