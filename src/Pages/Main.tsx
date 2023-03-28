import circle from "../assets/icons/circle-scatter-haikei.svg";
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
    <>
      <img src={circle} alt="" className="h-screen w-screen fixed opacity-20" />
      <main className="lg:ml-28  bg-white bg-clip-padding backdrop-filter backdrop-blur-[100px] bg-opacity-10  ">
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
    </>
  );
};

export default Main;
