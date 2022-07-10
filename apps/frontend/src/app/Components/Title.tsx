import React from 'react';

interface ITitleProps {
  title: string;
  description: string;
}

const Title = ({ title, description }: ITitleProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl text-center text-[#45505b] font-semibold border-b-2 border-indigo-600 p-3 uppercase">
        {title}
      </h2>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default Title;
