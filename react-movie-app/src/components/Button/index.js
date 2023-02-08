import React from "react";

export const Button = ({
  onClick,
  children,
  type = "button",
  className,
  bgColor = "primary",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-${bgColor} px-5 py-2 rounded-md text-white  ${className}`}
    >
      {children}
    </button>
  );
};
