import React from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DisplaySettingsOutlinedIcon from "@mui/icons-material/DisplaySettingsOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";

const SidebarNav = () => {
  return (
    <div className="sidenav__wrapper">
      <div className="side__nav">
        <div className="sidenav__item">
          <div className="sidenav__icon">
            <DisplaySettingsOutlinedIcon style={{ fontSize: "2rem" }} />
          </div>
          <h4 className="sidenav__text">Display</h4>
        </div>
        <div className="sidenav__item">
          <div className="sidenav__icon">
            <LiveHelpOutlinedIcon style={{ fontSize: "2rem" }} />
          </div>
          <h4 className="sidenav__text">Help</h4>
        </div>
        <div className="sidenav__item">
          <div className="sidenav__icon">
            <Person2OutlinedIcon style={{ fontSize: "2rem" }} />
          </div>
          <h4 className="sidenav__text">Account</h4>
        </div>
        <div className="sidenav__item">
          <div className="sidenav__icon">
            <DonutSmallOutlinedIcon style={{ fontSize: "2rem" }} />
          </div>
          <h4 className="sidenav__text">Analitices</h4>
        </div>
        <div className="sidenav__item">
          <div className="sidenav__icon">
            <MailOutlinedIcon style={{ fontSize: "2rem" }} />
          </div>
          <h4 className="sidenav__text">Messages</h4>
        </div>
        <div className="sidenav__item">
          <div className="sidenav__icon">
            <CalculateOutlinedIcon style={{ fontSize: "2rem" }} />
          </div>
          <h4 className="sidenav__text">Calculator</h4>
        </div>
        <div className="sidenav__item">
          <div className="sidenav__icon">
            <SettingsOutlinedIcon style={{ fontSize: "2rem" }} />
          </div>
          <h4 className="sidenav__text">Settin</h4>
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;
