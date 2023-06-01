import { PATHS_ROUTE } from "@utils";
import React from "react";
import { NavLink } from "react-router-dom";

export const Banner = () => {
  return (
    <div className="banner-main flex items-center bg-gradient-to-br from-gradient1 to-gradient2 h-[520px] px-[40px]">
      <div className="banner-left flex-1">
        <h1 className="text-white text-5xl font-bold mb-5">Monkey Blogging</h1>

        <p className="text-white text-sm mb-12 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          exercitationem officiis maiores sapiente deserunt, atque, ex totam
          delectus optio sunt officia nisi consequatur sint illo tempore?
          Placeat necessitatibus optio amet.
        </p>

        <NavLink to={PATHS_ROUTE.register}>
          <button className="bg-white text-lg text-primary px-6 py-3 rounded-lg min-w-[230px] py-4">
            Get Started
          </button>
        </NavLink>
      </div>
      <div className="banner-right flex-1">
        <img src="/banner1.png" alt="" />
      </div>
    </div>
  );
};
