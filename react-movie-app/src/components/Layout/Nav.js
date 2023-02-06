import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const navLinkStyle = ({ isActive }) => (isActive ? "text-primary" : "");
  return (
    <header className="flex text-white gap-x-5 justify-center items-center p-5">
      <NavLink to={"/"} className={navLinkStyle}>
        Home
      </NavLink>
      <NavLink to={"/movies"} className={navLinkStyle}>
        Movies
      </NavLink>
    </header>
  );
}

export default Nav;
