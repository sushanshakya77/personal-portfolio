import React from 'react';
import Section from '../Components/Section';
import Title from '../Components/Title';

const Resume = () => {
  return (
    <Section>
      <Title
        title="Resume"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
          saepe numquam. Iusto, a voluptatibus, delectus architecto quia vitae
          animi facere quo assumenda earum cupiditate. Est iste eveniet at
          tenetur quae."
      />
      <div className="flex ">
        <div className="w-2/4 space-y-5 ">
          <h2 className="text-2xl text-[#45505b] font-bold ">Summary</h2>
          <div className="space-y-2 border-l-2 px-6 border-indigo-600 relative">
            <div className="h-4 w-4 bg-white border-2 border-indigo-600 rounded-full absolute -left-[9px] top-[6px]  "></div>

            <h3 className="text-xl uppercase text-indigo-600 font-semibold">
              Sushan Shakya
            </h3>
            <p className="italic">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
              non nihil libero adipisci harum eos maxime maiores dicta ad? Id
              deleniti molestiae, non aliquam in magnam suscipit mollitia
              assumenda saepe!
            </p>
            <ul className="list-disc pl-6">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam recusandae deleniti eveniet laudantium nobis
              </li>
              <li>
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam recusandae deleniti eveniet laudantium nobis
              </li>
              <li>
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam recusandae deleniti eveniet laudantium nobis
              </li>
            </ul>
          </div>
        </div>
        <div className="w-2/4 space-y-5">
          <h2 className="text-2xl text-[#45505b] font-bold ">
            Professional Experience
          </h2>
          <div className="space-y-2 border-l-2 px-6 border-indigo-600 relative">
            <div className="h-4 w-4 bg-white border-2 border-indigo-600 rounded-full absolute -left-[9px] top-[6px]"></div>
            <h3 className="text-xl uppercase text-indigo-600 font-semibold">
              Junior MERN Developer
            </h3>
            <h3 className="bg-slate-100 p-2 rounded-md font-semibold">
              2021 - Present
            </h3>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Resume;
