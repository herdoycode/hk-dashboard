import { AiOutlineClose } from "react-icons/ai";

const SidebarCollapse = () => {
  const navCollapse = () => {
    document
      .querySelector(".sidebar__wrapper")
      .setAttribute("class", "sidebar__wrapper nav__hide");
  };

  return (
    <div className="nav__collapse">
      <div onClick={navCollapse} className="collapse">
        <AiOutlineClose style={{ fontSize: "2rem" }} />
      </div>
    </div>
  );
};

export default SidebarCollapse;
