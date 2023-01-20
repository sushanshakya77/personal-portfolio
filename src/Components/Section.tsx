import React, { ReactNode } from "react";

interface ISectionProps {
  children: ReactNode;
  customStyle?: string;
  _id: string;
}

const Section = ({ children, customStyle, _id }: ISectionProps) => {
  return (
    <section
      className={`space-y-8 px-20 py-16 overflow-hidden  ${customStyle ?? ""}`}
      id={_id}
    >
      {children}
    </section>
  );
};

export default Section;
