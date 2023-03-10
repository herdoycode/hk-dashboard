import React from "react";

const Navbar = () => {
  return (
    <div className="nav__wrapper">
      <div className="navbar">
        <div className="nav__left bg-purple">
          <h4>Left</h4>
        </div>
        <div className="nav__center bg-light">
          <h4>Center</h4>
        </div>
        <div className="nav__ritht bg-success">
          <h4>Right</h4>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
