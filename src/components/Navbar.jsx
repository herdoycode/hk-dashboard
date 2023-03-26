import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  };

  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  };

  useEffect(() => {
    const storeTheme = localStorage.getItem("theme");
    document.querySelector("body").setAttribute("data-theme", storeTheme);
  }, [setDarkTheme, setLightTheme]);

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
            <SearchIcon
              className="search-icon"
              style={{ fontSize: "2.5rem" }}
            />
          </div>
        </div>
        <div className="nav__right">
          <div className="nav__theme">
            <div onClick={setLightTheme} className="theme__info">
              <WbSunnyIcon color="inherit" style={{ fontSize: "1.2rem" }} />
            </div>
            <div onClick={setDarkTheme} className="theme__info active">
              <DarkModeIcon color="inherit" style={{ fontSize: "1.2rem" }} />
            </div>
          </div>
          <div className="nav__info">
            {/* <div className="avatar">
              <Avatar alt="Remy Sharp" src="https://i.ibb.co/M1kpGmK/me.jpg" />
            </div> */}
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/register"}>Register</NavLink>
            <div className="nav__info__item bg-light">
              <NotificationsActiveIcon style={{ fontSize: "2rem" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
