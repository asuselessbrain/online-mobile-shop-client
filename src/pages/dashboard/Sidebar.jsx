import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { MdLibraryAdd } from "react-icons/md"
import { FaHome } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";

const Sidebar = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    toast.success("LogOut Successful");
    navigate("/");
  };
  return (
    <ul className="flex flex-col min-h-screen fixed justify-between top-0 pb-10 left-0 w-64 bg-gray-50 h-full border-r">
      <ul>
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
        <li>
          <NavLink
            to="add-product"
            className={({ isActive }) =>
              isActive
                ? "relative flex flex-row items-center h-11 focus:outline-none bg-gray-200 text-gray-800 border-l-4 border-[#D1A054] pr-6"
                : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#D1A054] pr-6"
            }
          >
            <span className="inline-flex justify-center items-center ml-4">
            <MdLibraryAdd />
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
              Add Product
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="manage-product"
            className={({ isActive }) =>
              isActive
                ? "relative flex flex-row items-center h-11 focus:outline-none bg-gray-200 text-gray-800 border-l-4 border-[#D1A054] pr-6"
                : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#D1A054] pr-6"
            }
          >
            <span className="inline-flex justify-center items-center ml-4">
            <TfiMenuAlt />
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
              Manage Product
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/notification"
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
              Notifications
            </span>
            <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
              1.2k
            </span>
          </NavLink>
        </li>
      </ul>

      <ul>
        <li>
          <NavLink
            to="/dashboard/profile"
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
            <span className="ml-2 text-sm tracking-wide truncate">Profile</span>
          </NavLink>
        </li>
        <li>
          <button
            onClick={() => handleLogOut()}
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
            <span className="ml-2 text-sm tracking-wide truncate">Logout</span>
          </button>
        </li>
      </ul>
    </ul>
  );
};

export default Sidebar;
