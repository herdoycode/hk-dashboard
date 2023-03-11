import DashboardIcon from "@mui/icons-material/Dashboard";

const SidebarTitle = () => {
  return (
    <div className="sidebar__title">
      <div className="text-primary">
        <DashboardIcon style={{ fontSize: "2rem" }} />
      </div>
      <h4>Dashboard</h4>
    </div>
  );
};

export default SidebarTitle;
