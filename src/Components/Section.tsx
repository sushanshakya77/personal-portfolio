import React, { ReactNode } from 'react';

interface ISectionProps {
  children: ReactNode;
  customStyle?: string;
  _id: string;
}

const Section = ({ children, customStyle, _id }: ISectionProps) => {
  return (
    <section className={`space-y-8 px-16 my-16 ${customStyle}`} id={_id}>
      {children}
    </section>
  );
};

export default Section;
