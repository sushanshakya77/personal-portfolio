import React from "react";

interface IInputProps {
  width: string;
  type: string;
  placeholder: string;
}

const Input = ({ width, type, placeholder }: IInputProps) => {
  return (
    <input
      className={`border-[1px] rounded-md h-5 py-5 px-3 text-grey-darker focus:border-[#4f46e5]
      focus:outline-none ${width}`}
      type={type}
      placeholder={placeholder}
    ></input>
  );
};

export default Input;
