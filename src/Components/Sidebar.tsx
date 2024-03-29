import cross from "../assets/svg/cross.svg";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router";
const buttonContent = [
  {
    title: "Home",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-home "
        width="22"
        height="22"
        viewBox="0 0 24 24"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="5 12 3 12 12 3 21 12 19 12" />
        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
      </svg>
    ),
    href: "#home",
  },
  {
    title: "About",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-user"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="7" r="4" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      </svg>
    ),
    href: "#about",
  },
  {
    title: "Resume",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-file"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
      </svg>
    ),
    href: "#resume",
  },
  {
    title: "Portfolio",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-notebook"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
        <line x1="13" y1="8" x2="15" y2="8" />
        <line x1="13" y1="12" x2="15" y2="12" />
      </svg>
    ),
    href: "#portfolio",
  },
  {
    title: "Services",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-server"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="3" y="4" width="18" height="8" rx="3" />
        <rect x="3" y="12" width="18" height="8" rx="3" />
        <line x1="7" y1="8" x2="7" y2="8.01" />
        <line x1="7" y1="16" x2="7" y2="16.01" />
      </svg>
    ),
    href: "#services",
  },
  {
    title: "Contact",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-mail"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 13 21 7" />
      </svg>
    ),
    href: "#contact",
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  return (
    <header
      className={`flex flex-col h-screen transition-all ease-in-out duration-500 justify-center fixed top-0 bottom-0  max-lg:border-[1px] max-lg:w-[300px]  max-lg:bg-white z-50 overflow-y-auto   ${
        open ? "-left-[300px]" : "left-0"
      } `}
    >
      <button
        className={`lg:hidden h-10 w-10 rounded-full fixed top-3 right-3 stroke-white flex justify-center items-center transition-all duration-1000 ease-in-out ${
          open ? "bg-transparent" : "bg-indigo-600"
        }`}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-2 stroke-indigo-700"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        )}
      </button>
      <button
        className="lg:hidden bg-indigo-700 h-9 w-9 rounded-full fixed bottom-3 right-3 stroke-white justify-center items-center flex"
        onClick={() => window.scrollTo(0, 0)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrow-up "
          width="26"
          height="26"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="18" y1="11" x2="12" y2="5" />
          <line x1="6" y1="11" x2="12" y2="5" />
        </svg>
      </button>
      <nav className="p-5">
        <div className="space-y-2 max-lg:space-y-4">
          {buttonContent.map((content) => (
            <a
              key={content.title}
              className={`flex group max-w-full hover:max-w-full lg:max-w-[55px] lg:max-h-[54px] transition-all ease-in-out duration-500 space-x-2  rounded-full p-4   hover:bg-indigo-600  hover:stroke-white   justify-center items-center ${
                location?.hash === content?.href
                  ? "bg-indigo-600 stroke-white text-white"
                  : "bg-slate-100 stroke-gray-700"
              } `}
              href={content.href}
            >
              {content.icon}
              <h5 className="lg:hidden group-hover:block max-lg:text-lg max-lg:group-hover:text-white  max-lg:text-gray-700 text-white transition-all ease-in-out delay-150 ">
                {content.title}
              </h5>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Sidebar;
