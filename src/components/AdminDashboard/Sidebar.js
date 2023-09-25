import "./admin.css";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {
  RiHome2Fill,
  RiTable2,
  RiTableFill,
  RiPagesFill,
  RiSettings2Fill,
} from "react-icons/ri";
import logoutImg from "../../assets/icons/logout.png";
import LogoutButton from "../Logout/Logout";

function Sidebar() {
  const menuItem = [
    {
      path: "admin",
      linkName: "Overview",
      icon: <RiHome2Fill className="icon-medium" />,
    },
    {
      path: "admintable",
      linkName: "Admins",
      icon: <RiTable2 className="icon-medium" />,
    },
    {
      path: "agentsTable",
      linkName: "Agents",
      icon: <RiTableFill className="icon-medium" />,
    },
    {
      path: "reports",
      linkName: "Farmer",
      icon: <RiPagesFill className="icon-medium" />,
    },
    {
      path: "settings",
      linkName: "Settings",
      icon: <RiSettings2Fill className="icon-medium" />,
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
            activeClassName="active" // Specify the active class name here
          >
            <div className="app-sidebar-link">{item.icon}</div>
            <span>{item.linkName}</span>
          </NavLink>
          ))}
          <span className="adminlogout">
            <img src={logoutImg} alt="" />
            <LogoutButton />
          </span>
        </div>
        <div className="projects-section">
          <Outlet/>
        </div>
    </>
  );
}

export default Sidebar;
