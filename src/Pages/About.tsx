import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Section from "../Components/Section";
import Title from "../Components/Title";
import potrait1 from "../assets/images/easy.gif";

dayjs.extend(relativeTime);

const firstInfo = [
  {
    title: "Birthday",
    info: "Jan 4th, 2001",
  },
  {
    title: "Website",
    info: "sushanshakya.com.np",
  },
  {
    title: "Phone",
    info: "+977-9841667589",
  },
  {
    title: "City",
    info: "Swayambhu, Kathmandu",
  },
  {
    title: "Age",
    info: `${dayjs("2001-01-04").toNow(true)} old`,
  },
  {
    title: "Degree",
    info: "BSc (Hons) Computing",
  },
  {
    title: "Email",
    info: "sushanshakya77@gmail.com",
  },
  {
    title: "Freelance",
    info: "Available",
  },
];

const About = () => {
  return (
    <Section _id="about">
      <div className="w-full mx-auto space-y-9 ">
        <Title
          title="About"
          description={`I am a web developer/mobile developer with around ${dayjs().diff(
            "2021-09-01",
            "year"
          )} year of experience. I create dynamic, responsive, and intuitive web applications using modular and reusable code. My passion is to build high-quality, cutting-edge web applications.`}
        />
        <div className="flex space-x-6 ">
          <div className="flex-none h-full w-[416px] overflow-hidden ">
            <img
              className="h-[440px] w-[416px] object-cover hover:scale-110 transition-all duration-500 ease-in-out"
              src={potrait1}
              alt="about"
            />
          </div>
          <div className="flex-initial w-full space-y-5 ">
            <h2 className="text-3xl font-bold text-[#728394] ">
              Web Developer
            </h2>
            <p className="italic mt-2">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              culpa ex nostrum, sed assumenda tenetur quaerat ad ab omnis,
              aspernatur, corrupti earum!
            </p>
            {/* <div className="flex"> */}
            <div className="flex flex-wrap ">
              {firstInfo.map((item) => (
                <div className="py-3 w-2/4" key={item.title}>
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
                      strokeWidth="2"
                      stroke="#5f37ef"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                    {item.title}:{"   "}
                    <span className="text-base font-normal ml-2">
                      {item.info}
                    </span>
                  </h3>
                </div>
              ))}
            </div>
            {/* </div> */}
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              esse omnis accusamus minus sint, ullam voluptatem nemo eos velit
              officiis, provident facere vitae enim quas iure minima veritatis
              cupiditate quo. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Dolore esse omnis accusamus minus sint, ullam
              voluptatem nemo eos velit officiis, provident facere vitae enim
              quas iure minima veritatis cupiditate quo.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
