import React, { ReactNode } from "react";
interface ButtonProp {
  type: string;
  size: string;
  width?: string;
  rounded?:boolean;
  handleClick?: () => void;
  children: ReactNode;
}

const Button = ({ width, type, size, handleClick, children ,rounded}: ButtonProp) => {
  return (
    <button
      className={` text-white  cursor-pointer transition-all duration-300
        ${rounded ? "rounded-full" : "rounded-lg" }
         ${width === "full" ? "w-full" : ""}

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
