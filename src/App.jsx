// App.js
import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Heropage from "./pages/Heropage";
import Layout from "./pages/Layout";
import About from "./pages/About";
// import Header from "./components/Header";
// import Content from "./pages/Content";
// import AboutContent from "./pages/AboutContent";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
