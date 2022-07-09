import React from 'react';
import potrait1 from '../Images/potrait3.png';

const firstInfo = [
  {
    title: 'Birthday',
    info: 'Jan 4th, 2001',
  },
  {
    title: 'Website',
    info: 'sushanshakya.com.np',
  },
  {
    title: 'Phone',
    info: '+977-9841667589',
  },
  {
    title: 'City',
    info: 'Swayambhu, Kathmandu',
  },
];

const secondInfo = [
  {
    title: 'Age',
    info: '21 years old',
  },
  {
    title: 'Degree',
    info: 'BSc (Hons) Computing',
  },
  {
    title: 'Email',
    info: 'sushanshakya77@gmail.com',
  },
  {
    title: 'Freelance',
    info: 'Available',
  },
];

const About = () => {
  return (
    <section className="space-y-4 px-16 my-16 snap-end" id="#about">
      <div className="space-y-4">
        <h2 className="text-3xl text-center text-[#45505b] font-semibold border-b-2 border-indigo-500 p-3 ">
          ABOUT
        </h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
          saepe numquam. Iusto, a voluptatibus, delectus architecto quia vitae
          animi facere quo assumenda earum cupiditate. Est iste eveniet at
          tenetur quae.
        </p>
      </div>
      <div className="flex space-x-6">
        <div className="flex-none w-[416px] ">
          <img
            className="h-[440px] w-[416px] object-cover"
            src={potrait1}
            alt="about"
          />
        </div>
        <div className="flex-initial w-full space-y-5 ">
          <h2 className="text-3xl font-bold text-[#728394] ">Web Developer</h2>
          <p className="italic mt-2">
            {' '}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero culpa
            ex nostrum, sed assumenda tenetur quaerat ad ab omnis, aspernatur,
            corrupti earum!
          </p>
          <div className="flex">
            <div className="flex-col space-y-5 w-2/4">
              {firstInfo.map((item) => (
                <h3
                  key={item.title}
                  className="text-lg font-semibold text-slate-800 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-right"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="#5f37ef"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="9 6 15 12 9 18" />
                  </svg>{' '}
                  {item.title}:{'   '}
                  <span className="text-base font-normal ml-2">
                    {item.info}
                  </span>
                </h3>
              ))}
            </div>
            <div className="flex-col space-y-5 w-2/4">
              {secondInfo.map((item) => (
                <h3
                  key={item.title}
                  className="text-lg font-semibold text-slate-800 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-right"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="#5f37ef"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="9 6 15 12 9 18" />
                  </svg>{' '}
                  {item.title}:{'    '}
                  <span className="text-base font-normal ml-2">
                    {item.info}
                  </span>
                </h3>
              ))}
            </div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            esse omnis accusamus minus sint, ullam voluptatem nemo eos velit
            officiis, provident facere vitae enim quas iure minima veritatis
            cupiditate quo. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dolore esse omnis accusamus minus sint, ullam voluptatem nemo
            eos velit officiis, provident facere vitae enim quas iure minima
            veritatis cupiditate quo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
