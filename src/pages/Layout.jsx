import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
