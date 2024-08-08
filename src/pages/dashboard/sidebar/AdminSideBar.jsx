import { FaUserCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AdminSideBar = ({handleToggle}) => {
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
          <FaUserCog />
          </span>
          <span className="ml-2 text-sm tracking-wide truncate">
            Manage User
          </span>
        </NavLink>
      </li>
    </div>
  );
};

export default AdminSideBar;
