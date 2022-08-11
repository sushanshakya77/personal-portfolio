import React from 'react';
import potrait2 from '../Images/potrait.png';

export const socialMedia = [
  {
    title: 'Github',
    link: 'https://github.com/sushanshakya77',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-brand-github"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
      </svg>
    ),
  },
  {
    title: 'Linkedin',
    link: 'https://www.linkedin.com/in/sushan-shakya-8a575a197/',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-brand-linkedin"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <line x1="8" y1="11" x2="8" y2="16" />
        <line x1="8" y1="8" x2="8" y2="8.01" />
        <line x1="12" y1="16" x2="12" y2="11" />
        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
      </svg>
    ),
  },
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/whossushan/',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-brand-instagram"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3" />
        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
      </svg>
    ),
  },
  {
    title: 'Facebook',
    link: 'https://www.facebook.com/profile.php?id=100022736683759',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-brand-facebook"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
      </svg>
    ),
  },
  {
    title: 'Download CV',
    link: 'potrait2',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-download"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
        <polyline points="7 11 12 16 17 11" />
        <line x1="12" y1="4" x2="12" y2="16" />
      </svg>
    ),
    download: true,
  },
];

const Home = () => {
  return (
    <section
      className="h-screen bg-slate-100  flex justify-center items-center pl-28 relative"
      id="home"
    >
      <div className="flex flex-col justify-center space-y-4 w-2/4 ">
        <h1 className=" text-slate-600 text-6xl font-bold font-sans-serif">
          Sushan Shakya
        </h1>
        <h3 className=" text-slate-600 text-2xl">
          I'm <span className="text-indigo-600 ">Web Developer.</span>
        </h3>
        <div className="flex space-x-4  ">
          {socialMedia.map((item) => (
            <a
              href={item.link}
              key={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="stroke-[#5e5c5c] hover:stroke-indigo-600 group hover:scale-110 transition ease-in-out duration-200 "
              {...(item.download && { download: true })}
            >
              {item.icon}
              {/* <div className="bg-indigo-600 text-white px-2 py-1  absolute invisible group-hover:visible  -left-5 rounded-full text-center ">
                <p>{item.title}</p>
              </div> */}
            </a>
          ))}
        </div>
      </div>
      <div className="grow" />
      <div className="flex flex-col h-full w-2/4 absolute top-0 right-0 transition-all duration-200 ease-in-out ">
        <div className="bg-indigo-600 h-full clip-path "></div>
        <div className="absolute top-0 right-10">
          <img className="h-screen object-cover " src={potrait2} alt="bg" />
        </div>
      </div>
    </section>
  );
};

export default Home;
