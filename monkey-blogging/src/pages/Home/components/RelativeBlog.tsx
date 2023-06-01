import React from "react";

const RelativeBlog = () => {
  return (
    <div className="flex flex-row gap-[38px]">
      {Array(4)
        .fill(1)
        .map((_, index) => (
          <RelativeBlogItem index={index + 1} key={index} />
        ))}
    </div>
  );
};

export default RelativeBlog;

const RelativeBlogItem = ({ index }: { index: number }) => {
  return (
    <>
      <div className="w-[calc((100%-38px*3)/4)] bg-slate-500 ">
        <img
          src={`/relative${index}.png`}
          alt=""
          className="w-full h-[202px] bg-contain bg-no-repeat"
        />
      </div>
    </>
  );
};
