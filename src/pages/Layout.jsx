import React from "react";
import Navbar from "../components/Navbar";
import Heropage from "./Heropage";
import Products from "./Products";
import Demo from "./Demo";
import PatientJourney from "./PatientJourney";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Faq from "./Faq";
import { Element } from "react-scroll";
import Caregiver from "./Caregiver";
import CoustmerStory from "./CoustmerStory";

const Layout = () => {
  return (
    <div className="overflow-hidden">
      <Heropage />

      <Element className="product">
        <Products />
      </Element>
      <Demo />
      <Element className="Patient-journey">
        <PatientJourney />
      </Element>
      <Element className="caregiver">
      <Caregiver/>
      </Element>
      <CoustmerStory />
      <Element className="faq">
        <Faq />
      </Element>
      <Element className="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default Layout;
