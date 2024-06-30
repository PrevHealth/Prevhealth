// App.js
import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Heropage from "./pages/Heropage";
import Layout from "./pages/Layout";
import About from "./pages/About";
import ScrollToTop from "./components/ScrolltoTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Coustmer from "./pages/Coustmer";
import Error from "./pages/Error";
import CoustmerStory from "./pages/CoustmerStory";
// import Header from "./components/Header";
// import Content from "./pages/Content";
// import AboutContent from "./pages/AboutContent";

const App = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/Customer" element={<Coustmer />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
