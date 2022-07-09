import React from 'react';

const facts = [
  {
    number: 1,
    title: 'Happy Clients',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-mood-smile"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#fff"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="9" />
        <line x1="9" y1="10" x2="9.01" y2="10" />
        <line x1="15" y1="10" x2="15.01" y2="10" />
        <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
      </svg>
    ),
  },
  {
    number: 60,
    title: 'Projects',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-braces"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#fff"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 4a2 2 0 0 0 -2 2v3a2 3 0 0 1 -2 3a2 3 0 0 1 2 3v3a2 2 0 0 0 2 2" />
        <path d="M17 4a2 2 0 0 1 2 2v3a2 3 0 0 0 2 3a2 3 0 0 0 -2 3v3a2 2 0 0 1 -2 2" />
      </svg>
    ),
  },
  {
    number: 12,
    title: 'Certificates',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-award"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffffff"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="9" r="6" />
        <polyline
          points="9 14.2 9 21 12 19 15 21 15 14.2"
          transform="rotate(-30 12 9)"
        />
        <polyline
          points="9 14.2 9 21 12 19 15 21 15 14.2"
          transform="rotate(30 12 9)"
        />
      </svg>
    ),
  },
];

const Facts = () => {
  return (
    <section className="space-y-8 px-16 my-16">
      <div className="space-y-4">
        <h2 className="text-3xl text-center text-[#45505b] font-semibold border-b-2 border-indigo-600 p-3 ">
          FACTS
        </h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
          saepe numquam. Iusto, a voluptatibus, delectus architecto quia vitae
          animi facere quo assumenda earum cupiditate. Est iste eveniet at
          tenetur quae.
        </p>
      </div>
      <div className="flex space-x-6">
        {facts.map((fact) => (
          <div className="flex-col w-1/3 space-y-3">
            <div key={fact.title} className="flex justify-center ">
              <div className=" bg-indigo-600 rounded-full p-2">{fact.icon}</div>
            </div>
            <div>
              <h2 className="text-center font-semibold text-4xl">
                {fact.number}
              </h2>
              <h3 className="text-center ">{fact.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facts;
