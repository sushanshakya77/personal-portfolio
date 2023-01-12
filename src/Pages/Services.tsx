import React from 'react';
import Section from '../Components/Section';
import Title from '../Components/Title';

const services = [
  {
    title: 'Web Development',
    description:
      'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-browser"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#000000"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="1" />
        <line x1="4" y1="8" x2="20" y2="8" />
        <line x1="8" y1="4" x2="8" y2="8" />
      </svg>
    ),
    borderRadius: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#FF0066"
          d="M36.1,-42.3C46.5,-25.7,54.6,-12.8,56,1.4C57.4,15.6,52.2,31.3,41.7,42.2C31.3,53.1,15.6,59.3,-0.9,60.2C-17.4,61.1,-34.8,56.7,-47.2,45.8C-59.5,34.8,-66.8,17.4,-68.6,-1.9C-70.5,-21.1,-66.9,-42.3,-54.6,-58.9C-42.3,-75.6,-21.1,-87.7,-4.1,-83.6C12.8,-79.4,25.7,-59,36.1,-42.3Z"
          transform="translate(100 100)"
        />
      </svg>
    ),
  },
  {
    title: 'Python',
    description:
      'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-browser"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#000000"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="1" />
        <line x1="4" y1="8" x2="20" y2="8" />
        <line x1="8" y1="4" x2="8" y2="8" />
      </svg>
    ),
    borderRadius: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#FF0066"
          d="M36.1,-42.3C46.5,-25.7,54.6,-12.8,56,1.4C57.4,15.6,52.2,31.3,41.7,42.2C31.3,53.1,15.6,59.3,-0.9,60.2C-17.4,61.1,-34.8,56.7,-47.2,45.8C-59.5,34.8,-66.8,17.4,-68.6,-1.9C-70.5,-21.1,-66.9,-42.3,-54.6,-58.9C-42.3,-75.6,-21.1,-87.7,-4.1,-83.6C12.8,-79.4,25.7,-59,36.1,-42.3Z"
          transform="translate(100 100)"
        />
      </svg>
    ),
  },
  {
    title: 'NodeJS',
    description:
      'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-browser"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#000000"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="1" />
        <line x1="4" y1="8" x2="20" y2="8" />
        <line x1="8" y1="4" x2="8" y2="8" />
      </svg>
    ),
    borderRadius: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#FF0066"
          d="M36.1,-42.3C46.5,-25.7,54.6,-12.8,56,1.4C57.4,15.6,52.2,31.3,41.7,42.2C31.3,53.1,15.6,59.3,-0.9,60.2C-17.4,61.1,-34.8,56.7,-47.2,45.8C-59.5,34.8,-66.8,17.4,-68.6,-1.9C-70.5,-21.1,-66.9,-42.3,-54.6,-58.9C-42.3,-75.6,-21.1,-87.7,-4.1,-83.6C12.8,-79.4,25.7,-59,36.1,-42.3Z"
          transform="translate(100 100)"
        />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <Section _id="services">
      <Title
        title="Services"
        description="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
      />
      <div className="flex flex-wrap space-x-3">
        {services.map((item) => (
          <div className="bg-slate-100 rounded-md p-5 hover:drop-shadow-md transition-all duration-500 ease-in-out w-96">
            <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
            <div>
              <div className="bg-indigo-700 fancy-border-radius w-16"></div>
              <div className="mx-auto  z-30 top-28 left-52">{item.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
