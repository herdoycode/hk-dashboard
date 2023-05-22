import { useEffect } from "react";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineSetting, AiOutlineMail } from "react-icons/ai";
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
            <RxDashboard style={{ fontSize: "2rem" }} />
          </div>
          <h4 className="sidenav__text">Display</h4>
        </NavLink>
        <NavLink to={"/posts"} className="sidenav__item">
          <div className="sidenav__icon">
            <AiOutlineSetting style={{ fontSize: "2rem" }} />
          </div>
          <h4 className="sidenav__text">Posts</h4>
        </NavLink>
        <NavLink to={"/comments"} className="sidenav__item">
          <div className="sidenav__icon">
            <AiOutlineMail style={{ fontSize: "2rem" }} />
          </div>
          <h4 className="sidenav__text">Comments</h4>
        </NavLink>
        <NavLink to={"/messages"} className="sidenav__item">
          <div className="sidenav__icon">
            <AiOutlineMail style={{ fontSize: "2rem" }} />
          </div>
          <h4 className="sidenav__text">Messages</h4>
        </NavLink>
        <NavLink to={"/users"} className="sidenav__item">
          <div className="sidenav__icon">
            <AiOutlineSetting style={{ fontSize: "2rem" }} />
          </div>
          <h4 className="sidenav__text">Users</h4>
        </NavLink>
        <NavLink to={"/ss"} className="sidenav__item">
          <div className="sidenav__icon">
            <AiOutlineSetting style={{ fontSize: "2rem" }} />
          </div>
          <h4 className="sidenav__text">Analitices</h4>
        </NavLink>

        <NavLink to={"/help"} className="sidenav__item">
          <div className="sidenav__icon">
            <AiOutlineSetting style={{ fontSize: "2rem" }} />
          </div>
          <h4 className="sidenav__text">Calculator</h4>
        </NavLink>
        <NavLink to={"/setting"} className="sidenav__item">
          <div className="sidenav__icon">
            <AiOutlineSetting style={{ fontSize: "2rem" }} />
          </div>
          <h4 className="sidenav__text">Setting</h4>
        </NavLink>
      </div>
    </div>
  );
};

export default SidebarNav;
