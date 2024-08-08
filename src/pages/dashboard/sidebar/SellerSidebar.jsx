import { MdLibraryAdd } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

const SellerSidebar = ({handleToggle}) => {
  return (
    <div>
      <li>
        <NavLink
          to="add-product"
          onClick={handleToggle}
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
          onClick={handleToggle}
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  ></path>
                </svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Manage Order
              </span>
            </NavLink>
          </li>
    </div>
  );
};

export default SellerSidebar;
