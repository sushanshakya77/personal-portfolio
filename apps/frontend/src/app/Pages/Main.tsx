import React from 'react';
import About from './About';
import Facts from './Facts';
import Home from './Home';

const Main = () => {
  return (
    <main className="flex-initial w-full">
      <Home />
      <About />
      <Facts />
    </main>
  );
};

export default Main;
