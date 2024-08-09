import { NavLink } from "react-router-dom";

const SidebarNavLinks = ({handleToggle, address, label, icon: Icon}) => {
    return (
        <li>
        <NavLink
        end
          to={address}
          onClick={handleToggle}
          className={({ isActive }) =>
            isActive
              ? "relative flex flex-row items-center h-11 focus:outline-none bg-gray-200 text-gray-800 border-l-4 border-[#D1A054] pr-6"
              : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#D1A054] pr-6"
          }
        >
          <span className="inline-flex justify-center items-center ml-4">
            <Icon />
          </span>
          <span className="ml-2 text-sm tracking-wide truncate">
            {label}
          </span>
        </NavLink>
      </li>
    );
};

export default SidebarNavLinks;