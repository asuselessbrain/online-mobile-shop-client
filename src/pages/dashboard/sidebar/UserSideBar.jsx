import SidebarNavLinks from "./SidebarNavLinks";
import { FaCartArrowDown } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { MdReviews } from "react-icons/md";

const UserSideBar = ({handleToggle}) => {
    return (
        <div>
            <SidebarNavLinks address="my-cart" handleToggle={handleToggle} label="My Cart" icon={FaCartArrowDown} />
            <SidebarNavLinks address="Payment-history" handleToggle={handleToggle} label="Payment History" icon={IoWallet} />
            <SidebarNavLinks address="my-cart" handleToggle={handleToggle} label="Add Review" icon={MdReviews} />
        </div>
    );
};

export default UserSideBar;