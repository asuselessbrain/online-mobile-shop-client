import { FaUserCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SidebarNavLinks from "./SidebarNavLinks";

const AdminSideBar = ({handleToggle}) => {
  return (
    <div>
      <SidebarNavLinks address="manage-user" handleToggle={handleToggle} label="Manage User" icon={FaUserCog} />
    </div>
  );
};

export default AdminSideBar;
