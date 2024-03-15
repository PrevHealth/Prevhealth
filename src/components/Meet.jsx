import React from "react";
import { PopupButton } from "react-calendly";
import { useLanguage } from "../context/LanguageContext";

const Meet = () => {
  const { language } = useLanguage();
  const meeturl = import.meta.env.VITE_CALENDLY_LINK;
  return (
    <div>
      <PopupButton
        className=""
        url={meeturl}
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */

        rootElement={document.getElementById("root")}
        text={language === "en" ? "Book a demo" : "Boka en demo"}
      ></PopupButton>
    </div>
  );
};

export default Meet;
