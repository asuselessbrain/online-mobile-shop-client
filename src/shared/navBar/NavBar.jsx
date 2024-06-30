import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-bg-white bg-gray-600 text-white px-2 py-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-16" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            AstraGadgets
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-blue-700 rounded-md md:bg-transparent md:text-green-500 md:border-b-4 md:border-green-500 md:p-2 dark:text-white md:dark:text-blue-500"
                    : "block py-2 px-3 text-white rounded-md md:bg-transparent md:text-white md:border-b-0 md:p-2 dark:text-white md:dark:text-blue-500"
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-blue-700 rounded-md md:bg-transparent md:text-green-500 md:border-b-4 md:border-green-500 md:p-2 dark:text-white md:dark:text-blue-500"
                    : "block py-2 px-3 text-white rounded-md md:bg-transparent md:text-white md:border-b-0 md:p-2 dark:text-white md:dark:text-blue-500"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-blue-700 rounded-md md:bg-transparent md:text-green-500 md:border-b-4 md:border-green-500 md:p-2 dark:text-white md:dark:text-blue-500"
                    : "block py-2 px-3 text-white rounded-md md:bg-transparent md:text-white md:border-b-0 md:p-2 dark:text-white md:dark:text-blue-500"
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-blue-700 rounded-md md:bg-transparent md:text-green-500 md:border-b-4 md:border-green-500 md:p-2 dark:text-white md:dark:text-blue-500"
                    : "block py-2 px-3 text-white rounded-md md:bg-transparent md:text-white md:border-b-0 md:p-2 dark:text-white md:dark:text-blue-500"
                }
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-blue-700 rounded-md md:bg-transparent md:text-green-500 md:border-b-4 md:border-green-500 md:p-2 dark:text-white md:dark:text-blue-500"
                    : "block py-2 px-3 text-white rounded-md md:bg-transparent md:text-white md:border-b-0 md:p-2 dark:text-white md:dark:text-blue-500"
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <Link
                to="/contact"
              >
                <button className="btn bg-green-500 border-0 text-white hover:bg-green-600">Sign In</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
