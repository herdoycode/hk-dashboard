import { BsSearch, BsBell } from "react-icons/bs";
import {} from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  const navActive = () => {
    document
      .querySelector(".sidebar__wrapper")
      .setAttribute("class", "sidebar__wrapper nav__actiov");
  };

  return (
    <div className="nav__wrapper">
      <div className="navbar">
        <div className="nav__left">
          <div className="brand">
            <img src="https://i.ibb.co/2Zj543Y/h-code-logo.png" alt="" />
          </div>
          <div onClick={navActive} className="toggler">
            <div className="line_1"></div>
            <div className="line_2"></div>
            <div className="line_3"></div>
          </div>
        </div>
        <div className="nav__center">
          <div className="nav__search bg-light">
            <input type="text" placeholder="Search..." />
            <BsSearch className="search-icon" style={{ fontSize: "2.5rem" }} />
          </div>
        </div>
        <div className="nav__right">
          <div className="nav__theme">
            <ThemeSwitch />
          </div>
          <div className="nav__info">
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/register"}>Register</NavLink>
            <div className="nav__info__item bg-light">
              <BsBell style={{ fontSize: "2rem" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
