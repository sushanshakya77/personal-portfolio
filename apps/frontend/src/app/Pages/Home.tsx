import React from 'react';
import potrait2 from '../Images/potrait2.png';

const Home = () => {
  return (
    <section className="h-screen w-full flex justify-center items-center p-40 ">
      <div className="flex-col justify-center space-y-4 ">
        <h1 className=" text-slate-600 text-6xl font-bold">Sushan Shakya</h1>
        <h3 className=" text-slate-600 text-2xl">I'm Web Developer</h3>
      </div>
      <div className="flex-1" />
      <div className="">
        <img
          className=" h-screen object-contain opacity-70 -z-10 "
          src={potrait2}
          alt="bg"
        />
      </div>
    </section>
  );
};

export default Home;
