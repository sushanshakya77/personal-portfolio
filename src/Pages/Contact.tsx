import React from "react";
import Section from "../Components/Section";
import Title from "../Components/Title";

const contactDetails = [
  {
    title: "Location",
    description: "Swayambhu, Kathmandu, Nepal",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-browser stroke-[#0563BB] "
        width="26"
        height="26"
        viewBox="0 0 24 24"
        strokeWidth="1.25"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="1" />
        <line x1="4" y1="8" x2="20" y2="8" />
        <line x1="8" y1="4" x2="8" y2="8" />
      </svg>
    ),
  },
  {
    title: "Email",
    description: "sushanshakya77@gmail.com",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-browser stroke-[#0563BB] "
        width="26"
        height="26"
        viewBox="0 0 24 24"
        strokeWidth="1.25"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="1" />
        <line x1="4" y1="8" x2="20" y2="8" />
        <line x1="8" y1="4" x2="8" y2="8" />
      </svg>
    ),
  },
  {
    title: "Call",
    description: "+977 9841667589",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-browser stroke-[#0563BB] "
        width="26"
        height="26"
        viewBox="0 0 24 24"
        strokeWidth="1.25"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="1" />
        <line x1="4" y1="8" x2="20" y2="8" />
        <line x1="8" y1="4" x2="8" y2="8" />
      </svg>
    ),
  },
];

const Contact = () => {
  return (
    <Section _id="contact">
      <Title title="Contact" />
      <div className="flex w-full space-x-3">
        <div className="w-1/3 ">
          <div className="space-y-9">
            {contactDetails.map((contact) => (
              <div className="w-full flex " key={contact.title}>
                <div className="w-1/5 flex justify-center items-center">
                  <div className=" bg-teal-200 rounded-full transition-all duration-200 ease-in-out w-11 h-11 flex justify-center items-center hover:stroke-neutral-100 hover:bg-[#0563BB]">
                    {contact.logo}
                  </div>
                </div>
                <div className="w-4/5">
                  <h2 className="text-2xl font-semibold text-slate-600">
                    {contact.title}:
                  </h2>
                  <h3 className="text-md text-slate-500">
                    {contact.description}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-2/3"></div>
      </div>
    </Section>
  );
};

export default Contact;
