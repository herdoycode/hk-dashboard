import React, { useEffect } from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DisplaySettingsOutlinedIcon from "@mui/icons-material/DisplaySettingsOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import Dashboard from "@mui/icons-material/Dashboard";
import { NavLink } from "react-router-dom";

const SidebarNav = () => {
  useEffect(() => {
    Array.from(document.querySelectorAll(".sidenav__item")).map((item) =>
      item.addEventListener("click", () =>
        document
          .querySelector(".sidebar__wrapper")
          .setAttribute("class", "sidebar__wrapper nav__hide")
      )
    );
  }, [NavLink]);

  return (
    <div className="sidenav__wrapper">
      <div className="sidenav">
        <NavLink to={"/"} className="sidenav__item">
          <div className="sidenav__icon">
            <Dashboard style={{ fontSize: "2rem" }} />
          </div>
          <h4 className="sidenav__text">Display</h4>
        </NavLink>
        <NavLink to={"/posts"} className="sidenav__item">
          <div className="sidenav__icon">
            <DisplaySettingsOutlinedIcon style={{ fontSize: "2rem" }} />
          </div>
          <h4 className="sidenav__text">Posts</h4>
        </NavLink>
        <NavLink to={"/users"} className="sidenav__item">
          <div className="sidenav__icon">
            <LiveHelpOutlinedIcon style={{ fontSize: "2rem" }} />
          </div>
          <h4 className="sidenav__text">Help</h4>
        </NavLink>
        <NavLink to={"/orders"} className="sidenav__item">
          <div className="sidenav__icon">
            <Person2OutlinedIcon style={{ fontSize: "2rem" }} />
          </div>
          <h4 className="sidenav__text">Account</h4>
        </NavLink>
        <NavLink to={"/messages"} className="sidenav__item">
          <div className="sidenav__icon">
            <DonutSmallOutlinedIcon style={{ fontSize: "2rem" }} />
          </div>
          <h4 className="sidenav__text">Analitices</h4>
        </NavLink>
        <NavLink to={"/profile"} className="sidenav__item">
          <div className="sidenav__icon">
            <MailOutlinedIcon style={{ fontSize: "2rem" }} />
          </div>
          <h4 className="sidenav__text">Messages</h4>
        </NavLink>
        <NavLink to={"/help"} className="sidenav__item">
          <div className="sidenav__icon">
            <CalculateOutlinedIcon style={{ fontSize: "2rem" }} />
          </div>
          <h4 className="sidenav__text">Calculator</h4>
        </NavLink>
        <NavLink to={"/setting"} className="sidenav__item">
          <div className="sidenav__icon">
            <SettingsOutlinedIcon style={{ fontSize: "2rem" }} />
          </div>
          <h4 className="sidenav__text">Settin</h4>
        </NavLink>
      </div>
    </div>
  );
};

export default SidebarNav;
