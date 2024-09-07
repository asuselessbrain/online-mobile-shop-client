import { FaHome, FaUserCog } from "react-icons/fa";
import SidebarNavLinks from "./SidebarNavLinks";

const AdminSideBar = ({handleToggle}) => {
  return (
    <div>
      <SidebarNavLinks
        address="/dashboard/admin-home"
        handleToggle={handleToggle}
        label="Dashboard"
        icon={FaHome}
      />
      <SidebarNavLinks address="manage-user" handleToggle={handleToggle} label="Manage User" icon={FaUserCog} />
    </div>
  );
};

export default AdminSideBar;
