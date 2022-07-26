import React from 'react';
import { socialMedia } from '../Pages/Home';
import Section from './Section';

const Footer = () => {
  return (
    <Section
      customStyle="text-center justify-center content-center"
      _id="footer"
    >
      <div className=" space-y-4 text-center">
        <h1 className="text-4xl font-bold text-[#45505b] uppercase">
          Sushan Shakya
        </h1>
        <p className="italic">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos rem,
          saepe quis iste.
        </p>
      </div>
      <div className="flex space-x-4 justify-center content-center">
        {socialMedia.map((item) => (
          <a
            href={item.link}
            key={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="stroke- stroke-[#ddd] bg-indigo-600 p-2 rounded-full hover:bg-indigo-500 hover:scale-110 transition ease-in-out duration-200 "
            {...(item.download && { download: true })}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Footer;
