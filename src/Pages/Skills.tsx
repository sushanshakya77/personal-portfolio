import React from "react";
import Section from "../Components/Section";
import Title from "../Components/Title";

const skills = [
  {
    title: "HTML",
    level: "80%",
  },
  {
    title: "CSS",
    level: "70%",
  },
  {
    title: "JavaScript",
    level: "60%",
  },
  {
    title: "React",
    level: "80%",
  },
  {
    title: "TypeScript",
    level: "70%",
  },

  {
    title: "Express",
    level: "75%",
  },
];

const Skills = () => {
  return (
    <Section _id="skills">
      <Title
        title="Skills"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
          saepe numquam. Iusto, a voluptatibus, delectus architecto quia vitae
          animi facere quo assumenda earum cupiditate. Est iste eveniet at
          tenetur quae."
      />
      <div>
        <div className="flex flex-wrap ">
          {skills.map((skill) => (
            <div
              className="flex-col w-1/2 space-y-3 px-4 py-2"
              key={skill.title}
            >
              <div className="flex w-full">
                <p className="text-xs font-bold text-[#45505b]">
                  {skill.title}
                </p>
                <div className="grow"></div>
                <p className="text-xs font-bold text-[#45505b]">
                  {skill.level}
                </p>
              </div>
              <div className="flex w-full">
                <div
                  className={`bg-indigo-600 max-w-full h-2`}
                  style={{
                    width: `${skill.level} `,
                  }}
                />
                <div
                  className="bg-slate-200 h-2 "
                  style={{ width: `${100 - parseInt(skill.level)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
