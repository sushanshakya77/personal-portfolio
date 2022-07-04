import React from 'react';

const buttonContent = [
  {
    title: 'Home',
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
  },
  {
    title: 'About',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-user"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        stroke-width="1.8"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="7" r="4" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      </svg>
    ),
  },
  {
    title: 'Resume',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-file"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        stroke-width="1.8"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
      </svg>
    ),
  },
  {
    title: 'Portfolio',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-notebook"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        stroke-width="1.8"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
        <line x1="13" y1="8" x2="15" y2="8" />
        <line x1="13" y1="12" x2="15" y2="12" />
      </svg>
    ),
  },
  {
    title: 'Services',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-server"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="1.8"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="3" y="4" width="18" height="8" rx="3" />
        <rect x="3" y="12" width="18" height="8" rx="3" />
        <line x1="7" y1="8" x2="7" y2="8.01" />
        <line x1="7" y1="16" x2="7" y2="16.01" />
      </svg>
    ),
  },
  {
    title: 'Contact',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-mail"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        stroke-width="1.8"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 13 21 7" />
      </svg>
    ),
  },
];
const Sidebar = () => {
  return (
    <header className="flex-none w-[86px]">
      <div className="p-5 flex-col space-y-2 fixed py-44">
        {buttonContent.map((content) => (
          <button className="flex group max-w-[55px] max-h-[54px] transition-all ease-in-out duration-500 space-x-2 bg-[#f2f3f5] rounded-full p-4 stroke-gray-700 hover:bg-[#0563bb] hover:stroke-white hover:max-w-[156px] justify-center items-center content-center ">
            {content.icon}
            <h5 className="hidden group-hover:block text-white transition-all ease-in-out delay-150 ">
              {content.title}
            </h5>
          </button>
        ))}
      </div>
    </header>
  );
};

export default Sidebar;
