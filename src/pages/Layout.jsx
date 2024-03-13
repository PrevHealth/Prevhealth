import React from "react";
import Navbar from "../components/Navbar";
import Heropage from "./Heropage";
import Products from "./Products";
import Demo from "./Demo";
import PatientJourney from "./PatientJourney";
import Contact from "./Contact";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Heropage />
      <Products />
      <Demo />
      <PatientJourney />
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
