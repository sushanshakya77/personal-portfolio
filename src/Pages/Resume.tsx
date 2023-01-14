import React from "react";
import Section from "../Components/Section";
import Title from "../Components/Title";

const education = [
  {
    courseTitle: "Bsc.(Hons) Computing",
    year: "2019-2022",
    college: "London Metropolitan University",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, saepe numquam. Iusto, a voluptatibus, delectus architecto quia vitae animi facere quo assumenda earum cupiditate. Est iste eveniet at tenetur quae.",
  },
  {
    courseTitle: "NEB",
    year: "2016-2018",
    college: "United Academy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, saepe numquam. Iusto, a voluptatibus, delectus architecto quia vitae animi facere quo assumenda earum cupiditate. Est iste eveniet at tenetur quae.",
  },
];

const Resume = () => {
  return (
    <Section _id="resume">
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
          <div className="space-y-2 border-l-2 px-6  border-indigo-600 relative">
            <div className="h-4 w-4 bg-white border-2 border-indigo-600 rounded-full absolute -left-[9px] top-[6px] "></div>

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
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam recusandae deleniti eveniet laudantium nobis
              </li>
              <li>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam recusandae deleniti eveniet laudantium nobis
              </li>
            </ul>
          </div>
          <h2 className="text-2xl text-[#45505b] font-bold ">Education</h2>
          <div className="space-y-2 border-l-2 px-6 border-indigo-600 relative">
            {education.map((edu, index) => (
              <>
                <div className="h-4 w-4 bg-white border-2 border-indigo-600 rounded-full absolute -left-[9px]  "></div>
                <h3 className="text-xl uppercase text-indigo-600 font-semibold mt-0">
                  {edu.courseTitle}
                </h3>
                <h3 className="bg-slate-100 p-2 rounded-md font-semibold">
                  {edu.year}
                </h3>
                <p className="italic">{edu.college}</p>
                <p>{edu.description}</p>
              </>
            ))}
          </div>
        </div>
        <div className="w-2/4 space-y-5">
          <h2 className="text-2xl text-[#45505b] font-bold ">
            Professional Experience
          </h2>
          <div className="space-y-2 border-l-2 px-6 border-indigo-600 relative">
            <div className="h-4 w-4 bg-white border-2 border-indigo-600 rounded-full absolute -left-[9px] top-[6px]"></div>
            <h3 className="text-xl uppercase text-indigo-600 font-semibold">
              MERN Developer
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
