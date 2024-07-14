import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const NavigationBar = () => {
  const { user, logOut } = useAuth();
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClose = () => {
    setNav(false)
  }

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Sign Out Successful!");
    });
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };


  const navigationItem = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "Phones", to: "/all-phones" },
    { id: 3, name: "About", to: "/about" },
    { id: 4, name: "Contact Us", to: "/contact" },
    {
      id: 5,
      name: "Brand",
      hasDropdown: true,
      dropdownItems: [
        { id: 1, name: "Apple", to: "/brand/apple" },
      ],
    },
  ];
  return (
    <div className="fixed max-w-[1440px] w-full z-10 bg-black text-white px-3 md:px-6 lg:px-16 py-4 flex justify-between items-center">
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo} className="h-16" alt="astra-gadgets logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          AstraGadgets
        </span>
      </Link>

      <ul className="hidden md:flex items-center gap-8">
      {navigationItem.map((item) =>
          item.hasDropdown ? (
            <li
              key={item.id}
              className="relative cursor-pointer"
              onMouseEnter={handleDropdown}
              onMouseLeave={handleDropdown}
            >
              <span className="hover:text-green-500">{item.name}</span>
              {dropdown && (
                <ul className="absolute left-0 mt-0 bg-gray-800 text-white shadow-lg">
                  {item.dropdownItems.map((dropdownItem) => (
                    <li key={dropdownItem.id} className="p-2 hover:bg-gray-800 cursor-pointer">
                      <NavLink to={dropdownItem.to} className="block">
                        {dropdownItem.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li key={item.id}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white rounded-md md:bg-transparent md:text-green-500 md:border-b-4 md:border-green-500 md:p-2"
                    : "block py-2 px-3 text-white rounded-md md:bg-transparent md:text-white md:border-b-0 md:p-2"
                }
              >
                {item.name}
              </NavLink>
            </li>
          )
        )}
        <li>
          {user ? (
            <button
              onClick={() => handleLogOut()}
              className="btn bg-red-500 border-0 text-white hover:bg-red-600"
            >
              Sign Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn bg-green-500 border-0 text-white hover:bg-green-600">
                Sign In
              </button>
            </Link>
          )}
        </li>
      </ul>

      <div className="block md:hidden" onClick={handleNav}>
        {nav ? <IoCloseSharp size={30} /> : <AiOutlineMenuUnfold size={30} />}
      </div>
      <ul
        className={
          nav
            ? "fixed top-0 left-0 duration-500 h-full p-4 border-r border-r-gray-900 bg-black w-[60%]"
            : "fixed top-0 left-[-100%] duration-500 h-full p-4 border-r border-r-gray-900 bg-black w-[60%]"
        }
      >
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-12" alt="astra-gadgets logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            AstraGadgets
          </span>
        </Link>
        {navigationItem.map((item) => (
          <li key={item.id}>
            <NavLink onClick={handleClose}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "block py-4 px-4 text-white font-bold rounded-md bg-transparent text-green-500 border-b-4 border-green-500 p-2 drop-shadow-lg hover:scale-105"
                  : "block py-4 px-4 text-white rounded-md md:bg-transparent md:text-white md:border-b-0 md:p-2 border-b duration-300 cursor-pointer border-gray-500"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationBar;
