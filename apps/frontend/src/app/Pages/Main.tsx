import React from 'react';
import About from './About';
import Facts from './Facts';
import Home from './Home';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Skills from './Skills';

const Main = () => {
  return (
    <main className="flex-initial w-full">
      <Home />
      <About />
      <Facts />
      <Skills />
      <Resume />
      <Portfolio />
    </main>
  );
};

export default Main;
