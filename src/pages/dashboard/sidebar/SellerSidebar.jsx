import { MdLibraryAdd } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import SidebarNavLinks from "./SidebarNavLinks";

const SellerSidebar = ({handleToggle}) => {
  return (
    <div>
      <SidebarNavLinks address="add-product" handleToggle={handleToggle} label="Add Product" icon={MdLibraryAdd} />
      <SidebarNavLinks address="manage-product" handleToggle={handleToggle} label="Manage Product" icon={TfiMenuAlt} />
      <SidebarNavLinks address="manage-order" handleToggle={handleToggle} label="Manage Order" icon={TfiMenuAlt} />
    </div>
  );
};

export default SellerSidebar;
