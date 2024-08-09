import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { FaHome } from "react-icons/fa";
import SellerSidebar from "./sidebar/SellerSidebar";
import AdminSideBar from "./sidebar/AdminSideBar";
import useRole from "../../hooks/useRole";
import SidebarNavLinks from "./sidebar/SidebarNavLinks";
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";
import UserSideBar from "./sidebar/UserSideBar";

const Sidebar = ({ isActive, setActive }) => {
  const { logOut } = useAuth();
  const [role] = useRole();

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    toast.success("LogOut Successful");
    navigate("/");
  };

  const handleToggle = () => {
    setActive(false);
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed lg:w-64 flex flex-col justify-between bg-gray-50 min-h-screen h-full border-r transition-transform duration-300 ease-in-out ${
          isActive ? "translate-x-0 z-50" : "-translate-x-full"
        } top-0 pb-10 lg:translate-x-0 lg:opacity-100 lg:visible`}
      >
        <ul className="flex flex-col">
          <li>
            <Link
              to="/"
              className="flex items-center justify-center border-b p-2 space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-16" alt="astra-gadgets logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                AstraGadgets
              </span>
            </Link>
          </li>
          <li className="px-5">
            <div className="flex flex-row items-center h-8">
              <div className="text-sm font-light tracking-wide text-gray-500">
                Menu
              </div>
            </div>
          </li>
          <SidebarNavLinks
            address="/dashboard"
            handleToggle={handleToggle}
            label="Dashboard"
            icon={FaHome}
          />
          <UserSideBar handleToggle={handleToggle} />
          {role === "seller" && <SellerSidebar handleToggle={handleToggle} />}

          {role === "admin" && <AdminSideBar handleToggle={handleToggle} />}
        </ul>

        <ul>
          <SidebarNavLinks
            address="profile"
            handleToggle={handleToggle}
            label="Profile"
            icon={CgProfile}
          />
          <li>
            <button
              onClick={handleLogOut}
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#D1A054] pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <IoLogOutOutline size={20} />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Logout
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;