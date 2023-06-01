import React from "react";

const HeadingTitle = ({ title }: { title: string }) => {
  return (
    <div className="mt-[50px] mb-[30px]">
      <div className="rectangle h-[3px] w-[35px] bg-[#00D1ED] mb-1"></div>
      <h1 className="text-[28px] text-titleHeading">{title}</h1>
    </div>
  );
};

export default HeadingTitle;
