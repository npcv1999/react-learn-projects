import React from "react";
import { NavLink } from "react-router-dom";

const menuLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Header = () => {
  return (
    <div className="">
      <div className="container">
        <div className="header-main flex items-center">
          <NavLink to="/">
            <img
              srcSet="/monkey.png 2x"
              alt=""
              className="block max-w-[50px]"
            />
          </NavLink>
          <ul className="menu flex justify-center items-center gap-5 ml-10 list-none">
            {menuLinks.map((link) => (
              <li key={link.name}>
                <NavLink to={link.link}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
          <div className="header-right flex ml-auto gap-5">
            <div className="search-input p-3 border border-primary rounded-md w-full max-w-[320px] flex items-center relative">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 outline-none pr-[35px]"
              />
              <img
                src="/search.png"
                alt=""
                className="object-contain absolute top-[50%] translate-y-[-50%] right-3"
              />
            </div>
            <button className="sign-up w-full max-w-[200px] bg-primary text-white px-6 rounded-md">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
