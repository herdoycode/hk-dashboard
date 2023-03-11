import React from "react";
import SidebarNav from "./SidebarNav";
import SidebarTitle from "./SidebarTitle";
import SidebarCollapse from "./SidebarCollapse";

const Sidebar = () => {
  return (
    <div className="sidebar__wrapper bg-light">
      <SidebarCollapse />
      <SidebarTitle />
      <SidebarNav />
    </div>
  );
};

export default Sidebar;
