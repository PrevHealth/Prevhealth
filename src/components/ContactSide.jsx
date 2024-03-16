import React from "react";
import { useLanguage } from "../context/LanguageContext";

const ContactSide = ({ data }) => {
  const { language } = useLanguage();
  return (
    <div className={`"flex  lg:pl-32 h-[80vh]  w-full overflow-hidden "`}>
      <div
        className={` bg-[url("/Contact/contact.png")] bg-no-repeat bg-cover rounded-md w-full`}
      >
        <div>
          <h1 className="text-center fonta mt-5 ">
            {language === "en" && "Contact Us"}
            {language === "swe" && "Kontakta oss"}
          </h1>
          <p className="text-center mt-5 fontb text-primary">
            {language === "en" && "We'd love to hear from you"}
            {language === "swe" && "Vi skulle älska att höra från dig"}
          </p>
        </div>
        <div className=" flex flex-col items-start gap-5 bg-blak w-1/2 mx-auto justify-center mt-6  pl-8 contact-side">
          <div className="flex gap-3">
            <div>
              <img src="/Contact/icon1.png" alt="" />
            </div>
            <span>contact@preveu.com</span>
          </div>
          <div className="flex  gap-5">
            <div>
              <img src="/Contact/icon2.png" alt="" />
            </div>
            <span className="">
              Idungränd 8, <br /> 187 73 Täby <br /> Sweden
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSide;
