import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const Navbar = () => {
  return (
    <div className="nav__wrapper">
      <div className="navbar">
        <div className="nav__left">
          <div className="brand">
            <img src="https://i.ibb.co/2Zj543Y/h-code-logo.png" alt="" />
          </div>
          <div className="toggler">
            <div className="line_1"></div>
            <div className="line_2"></div>
            <div className="line_3"></div>
          </div>
        </div>
        <div className="nav__center">
          <div className="nav__search bg-light">
            <input type="text" placeholder="Search..." />{" "}
            <SearchIcon
              className="search-icon"
              style={{ fontSize: "2.5rem" }}
            />
          </div>
        </div>
        <div className="nav__right">
          <div className="nav__info">
            <div className="nav__info__item">
              <Avatar alt="Remy Sharp" src="https://i.ibb.co/M1kpGmK/me.jpg" />
            </div>

            <div className="nav__info__item">
              <Badge badgeContent={4} color="primary">
                <MailIcon color="action" style={{ fontSize: "2.5rem" }} />
              </Badge>
            </div>

            <div className="nav__info__item">
              <Badge badgeContent={4} color="primary">
                <NotificationsActiveIcon
                  color="action"
                  style={{ fontSize: "3rem" }}
                />
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
