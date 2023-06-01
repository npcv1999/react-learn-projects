import React from "react";

const TagName = ({
  tagName,
  props,
}: {
  tagName: string;
  props?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
}) => {
  return (
    <div
      className="bg-white rounded-xl px-[10px] py-[4px] text-[#6B6B6B] text-sm"
      {...props}
    >
      <span>{tagName}</span>
    </div>
  );
};

export default TagName;
