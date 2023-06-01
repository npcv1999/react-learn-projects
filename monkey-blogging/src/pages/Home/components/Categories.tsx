import React from "react";
import HeadingTitle from "./HeadingTitle";
import TagName from "./TagName";
import AuthorContent from "./AuthorContent";

const Categories = () => {
  return (
    <>
      <HeadingTitle title="Feature" />
      <div className="w-full flex flex-row flex-wrap gap-[50px]">
        {Array.from(Array(3).keys()).map((item) => {
          return <CategoriesItem key={item} />;
        })}
      </div>
    </>
  );
};

export default Categories;

// Children

const CategoriesItem = () => {
  return (
    <div className="w-[calc((100%-100px)/3)] h-[272px] rounded-2xl bg-cates bg-cover bg-center px-2 py-[22px] pl-6 hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="head-cate flex flex-row item-center justify-between mb-4">
        <TagName tagName="Kiến thức" />
        <AuthorContent dateCreate="Mar 23" author="VNguyen" />
      </div>
      <p className="text-white text-xl font-semibold">
        Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
      </p>
    </div>
  );
};
