import React from 'react';
import potrait2 from '../Images/potrait2.png';

const Main = () => {
  return (
    <>
      <div className=" h-screen w-screen flex items-center">
        <div className="flex-col justify-center items-center p-40 space-y-4">
          <h1 className=" text-slate-600 text-6xl font-bold">Sushan Shakya</h1>
          <h3 className=" text-slate-600 text-2xl">I'm Web Developer</h3>
        </div>
        <img
          className="h-screen object-contain opacity-70  -z-10 "
          src={potrait2}
          alt="bg"
        />
      </div>
      <div className="  flex items-center">
        <h1>About</h1>
        <p>
          I'm a Web Developer. I'm a self-taught Web Developer with a passion
          for learning new technologies. I'm currently working as a Web
          Developer at a startup called 'Sushan Shakya'.
        </p>
      </div>
    </>
  );
};

export default Main;
