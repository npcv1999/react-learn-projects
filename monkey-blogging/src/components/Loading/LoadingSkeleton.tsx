import React from "react";
import "./styles.scss";

const LoadingSkeleton = (props: any) => {
  return (
    <div
      className="skeleton"
      style={{
        height: props.height,
        width: props.width || "100%",
        borderRadius: props.radius,
      }}
    ></div>
  );
};

export default LoadingSkeleton;
