import React from "react";
import { Route, Routes } from "react-router";
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
    // <Routes>
    //   <Route path="/">
    //     <Route
    //       index
    //       element={
    //         <main className="lg:ml-28  ">
    //           <Home />
    //         </main>
    //       }
    //     ></Route>
    //     <Route path="about" element={<About />}></Route>
    //     <Route path="facts" element={<Facts />}></Route>
    //   </Route>
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

    // </Routes>
  );
};

export default Main;
