import React, { ReactNode } from 'react';

interface ISectionProps {
  children: ReactNode;
}

const Section = ({ children }: ISectionProps) => {
  return <section className="space-y-8 px-16 my-16">{children}</section>;
};

export default Section;
