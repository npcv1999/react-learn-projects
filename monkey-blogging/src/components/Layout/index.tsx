import React, { FC } from "react";
import Header from "./Header";

export const Layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
    </div>
  );
};
