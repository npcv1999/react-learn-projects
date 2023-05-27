import { PATHS_ROUTE } from "@utils";
import React from "react";
import { NavLink } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center flex-col h-[100vh]">
      <NavLink to={PATHS_ROUTE.home}>
        <img srcSet="/monkey.png 2x" alt="monkey-blogging" />
      </NavLink>
      <h1 className="text-4xl font-bold mt-4">404 - Not Found!</h1>
      <p className="text-xl mt-4">
        Sorry, the page you visited does not exist.
      </p>

      <NavLink to={PATHS_ROUTE.home}>
        <button className="mt-5 w-full max-w-[200px] bg-primary text-white px-6 rounded-md p-4">
          Back to Home
        </button>
      </NavLink>
    </div>
  );
};
