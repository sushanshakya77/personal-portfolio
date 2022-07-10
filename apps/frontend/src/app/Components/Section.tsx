import React, { ReactNode } from 'react';

interface ISectionProps {
  children: ReactNode;
  customStyle?: string;
}

const Section = ({ children, customStyle }: ISectionProps) => {
  return (
    <section className={`space-y-8 px-16 my-16 ${customStyle}`}>
      {children}
    </section>
  );
};

export default Section;
