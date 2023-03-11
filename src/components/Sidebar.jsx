import React from "react";
import SidebarNav from "./SidebarNav";
import SidebarCollapse from "./SidebarCollapse";

const Sidebar = () => {
  return (
    <div className="sidebar__wrapper bg-light">
      <SidebarCollapse />
      <SidebarNav />
    </div>
  );
};

export default Sidebar;
