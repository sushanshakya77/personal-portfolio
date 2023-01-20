import React from "react";
import Footer from "../Components/Footer";
import About from "./About";
import Contact from "./Contact";
import Facts from "./Facts";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Services from "./Services";
import Skills from "./Skills";

const Main = () => {
  return (
    <main className="lg:ml-28  ">
      <Home />
      <About />
      <Facts />
      <Skills />
      <Resume />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
};

export default Main;
