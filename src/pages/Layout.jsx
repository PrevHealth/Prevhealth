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
      <Navbar />
      <Heropage />
      <Element className="product">
        <Products />
      </Element>
      <Element className="demo">
        <Demo />
      </Element>
      <Element className="Patient">
        <PatientJourney />
      </Element>
      <Element className="Caregiver-journey">
        <Caregiver />
      </Element>
      <Element className="Customer-journey">
        <CoustmerStory />
      </Element>
      <Element className="faq">
        <Faq />
      </Element>
      <Element className="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
};

export default Layout;
