import React from "react";
import HeadingTitle from "./HeadingTitle";

const News = () => {
  return (
    <>
      <HeadingTitle title="Newest Update" />
      <div className="flex flex-row gap-[39px]">
        <div className="flex-1">
          <img
            src="/newsLeft.png"
            alt=""
            className="w-full h-[433px] object-cover"
          />
        </div>
        <div className="flex-1 bg-[#F3EDFF] rounded-[15px]">
          {Array(3)
            .fill(1)
            .map((_, index) => (
              <NewsItemRight index={index + 1} key={index} />
            ))}
        </div>
      </div>
    </>
  );
};

export default News;

const NewsItemRight = ({ index }: { index: number }) => {
  return (
    <div className="my-[30px]">
      <img src={`/newsRight${index}.png`} alt="" />
    </div>
  );
};
