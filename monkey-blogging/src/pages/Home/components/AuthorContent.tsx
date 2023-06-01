import React from "react";

const AuthorContent = ({
  dateCreate,
  author,
  txtColor,
  pointColor,
}: {
  dateCreate: string;
  author: string;
  txtColor?: string;
  pointColor?: string;
}) => {
  return (
    <div
      className="author flex flex-row items-center"
      style={{
        color: txtColor ? txtColor : "#fff",
      }}
    >
      <span>{dateCreate}</span>
      <div
        className="w-[6px] h-[6px] rounded-full mx-[10px]"
        style={{
          backgroundColor: pointColor ? pointColor : "#fff",
        }}
      ></div>
      <span>{author}</span>
    </div>
  );
};

export default AuthorContent;
