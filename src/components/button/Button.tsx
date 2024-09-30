import React, { ReactNode } from "react";
interface ButtonProp {
  type: string;
  size: string;
  handleClick?: () => void;
  children: ReactNode;
}

const Button = ({ type, size, handleClick, children }: ButtonProp) => {
  return (
    <button
      className={` text-white rounded-lg cursor-pointer transition-all duration-300
         ${size === "big" ? "px-8 py-2" : "px-3 py-2"}
         ${type === "primary" ? "bg-primary-500 hover:bg-primary-500/80" : ""}
         ${type === "accent" ? "bg-accent-500 hover:bg-accent-500/80" : ""}
         ${type === "neutral" ? "bg-black hover:bg-black/80" : ""}
        onch 
         `}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
