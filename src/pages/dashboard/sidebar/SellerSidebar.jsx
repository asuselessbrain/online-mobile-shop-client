import { MdLibraryAdd } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import SidebarNavLinks from "./SidebarNavLinks";
import { FaHome } from "react-icons/fa";

const SellerSidebar = ({handleToggle}) => {
  return (
    <div>
      <SidebarNavLinks
        address="/dashboard/seller-home"
        handleToggle={handleToggle}
        label="Dashboard"
        icon={FaHome}
      />
      <SidebarNavLinks address="add-product" handleToggle={handleToggle} label="Add Product" icon={MdLibraryAdd} />
      <SidebarNavLinks address="manage-product" handleToggle={handleToggle} label="Manage Product" icon={TfiMenuAlt} />
      <SidebarNavLinks address="manage-order" handleToggle={handleToggle} label="Manage Order" icon={TfiMenuAlt} />
    </div>
  );
};

export default SellerSidebar;
