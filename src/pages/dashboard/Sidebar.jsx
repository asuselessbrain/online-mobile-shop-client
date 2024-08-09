import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { FaHome } from "react-icons/fa";
import SellerSidebar from "./sidebar/SellerSidebar";
import AdminSideBar from "./sidebar/AdminSideBar";
import useRole from "../../hooks/useRole";
import Spinner from "../../components/Spinner";

const Sidebar = ({ isActive, setActive }) => {
  const { logOut } = useAuth();
  const [role, isLoading] = useRole();

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    toast.success("LogOut Successful");
    navigate("/");
  };

  const handleToggle = () => {
    setActive(false);
  };

  if (isLoading) return <Spinner />;

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
          <li>
            <NavLink
              to="/dashboard"
              onClick={handleToggle}
              end
              className={({ isActive }) =>
                isActive
                  ? "relative flex flex-row items-center h-11 focus:outline-none bg-gray-200 text-gray-800 border-l-4 border-[#D1A054] pr-6"
                  : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#D1A054] pr-6"
              }
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FaHome />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Dashboard
              </span>
            </NavLink>
          </li>
          {
            role === 'seller' && <SellerSidebar handleToggle={handleToggle} /> 
          }
          
          {
            role === 'admin' && <AdminSideBar handleToggle={handleToggle} />
          }
        </ul>

        <ul>
          <li>
            <NavLink
              to="profile"
              onClick={handleToggle}
              className={({ isActive }) =>
                isActive
                  ? "relative flex flex-row items-center h-11 focus:outline-none bg-gray-200 text-gray-800 border-l-4 border-[#D1A054] pr-6"
                  : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#D1A054] pr-6"
              }
            >
              <span className="inline-flex justify-center items-center ml-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Profile
              </span>
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleLogOut}
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#D1A054] pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
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
