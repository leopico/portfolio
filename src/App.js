import React from "react";
import About from "./components/About";
import BackToTopBtn from "./components/BackToTopBtn";
import WebTwoSkills from "./components/WebTwoSkills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import WebThreeSkills from "./components/WebThreeSkills";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <WebTwoSkills />
      <WebThreeSkills />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
      <BackToTopBtn />
    </div>
  );
};

export default App;
