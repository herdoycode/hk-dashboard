import CloseIcon from "@mui/icons-material/Close";

const SidebarCollapse = () => {
  const navCollapse = () => {
    document
      .querySelector(".sidebar__wrapper")
      .setAttribute("class", "sidebar__wrapper nav__hide");
  };
  return (
    <div className="nav__collapse">
      <div onClick={navCollapse} className="collapse">
        <CloseIcon style={{ fontSize: "2rem" }} />
      </div>
    </div>
  );
};

export default SidebarCollapse;
