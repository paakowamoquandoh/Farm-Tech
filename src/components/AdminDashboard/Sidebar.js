import "./admin.css";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {
  RiHome2Fill,
  RiTable2,
  RiPagesFill,
  RiSettings2Fill,
} from "react-icons/ri";
import logoutImg from "../../assets/icons/logout.png";
import DashboardHome from "./DashboardHome";

function Sidebar() {
  const menuItem = [
    {
      path: "admin",
      linkName: "Home",
      icon: <RiHome2Fill />,
    },
    {
      path: "admintable",
      linkName: "Tables",
      icon: <RiTable2 />,
    },
    {
      path: "reports",
      linkName: "Reports",
      icon: <RiPagesFill />,
    },
    {
      path: "settings",
      linkName: "Settings",
      icon: <RiSettings2Fill />,
    },
  ];
  return (
    <>     
        <div className="app-sidebar">
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="barLink"
              activeClassName="active"
            >
              <div className="app-sidebar-link">{item.icon}</div>
              <span>{item.linkName}</span>
            </NavLink>
          ))}
          <span className="adminlogout">
            <img src={logoutImg} alt="" />
            Log Out
          </span>
        </div>
        <div className="projects-section">
          <DashboardHome />
          <Outlet/>
        </div>
    </>
  );
}

export default Sidebar;
