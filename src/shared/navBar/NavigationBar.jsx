import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import useCart from "../../hooks/useCart";

const NavigationBar = () => {
  const { user, logOut } = useAuth();
  const [nav, setNav] = useState(false);
  const [cartData] = useCart();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClose = () => {
    setNav(false);
  };

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Sign Out Successful!");
    });
  };
  const navigationItem = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "Brand", to: "/all-phones" },
    { id: 3, name: "About", to: "/about" },
    { id: 4, name: "Contact Us", to: "/contact" },
  ];
  return (
    <div className="fixed max-w-[1440px] w-full z-10 bg-black text-white px-3 md:px-6 lg:px-16 py-4 flex justify-between items-center">
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo} className="h-12 lg:h-16" alt="astra-gadgets logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          AstraGadgets
        </span>
      </Link>

      <ul className="hidden lg:flex items-center gap-8">
        {navigationItem.map((item) => (
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
        ))}
        <ul>
          {user ? (
            <div className="flex items-center gap-8">
              <li>
                <NavLink
                  to="dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-white rounded-md md:bg-transparent md:text-green-500 md:border-b-4 md:border-green-500 md:p-2"
                      : "block py-2 px-3 text-white rounded-md md:bg-transparent md:text-white md:border-b-0 md:p-2"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="dashboard"
                  className="flex text-white relative rounded-md md:bg-transparent md:text-white md:border-b-0"
                >
                  <MdOutlineShoppingCart size={34} />
                  <h2 className="absolute -right-4 -top-4 bg-green-400 rounded-full px-2 py-1">{cartData.length}</h2>
                </NavLink>
              </li>
              <li>
                <button
                  onClick={() => handleLogOut()}
                  className="btn bg-red-500 border-0 text-white hover:bg-red-600"
                >
                  Sign Out
                </button>
              </li>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn bg-green-500 border-0 text-white hover:bg-green-600">
                Sign In
              </button>
            </Link>
          )}
        </ul>
      </ul>

      <div className="block lg:hidden cursor-pointer" onClick={handleNav}>
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
            <NavLink
              onClick={handleClose}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "block py-4 px-4 text-white font-bold rounded-md bg-transparent border-b-4 border-green-500 p-2 drop-shadow-lg hover:scale-105"
                  : "block py-4 px-4 text-white rounded-md md:bg-transparent md:text-white md:border-b-0 md:p-2 border-b duration-300 cursor-pointer border-gray-500"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
        {user ? (
          <>
            <li className="mb-4">
              <NavLink
                to="dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "block py-4 px-4 text-white font-bold rounded-md bg-transparent border-b-4 border-green-500 p-2 drop-shadow-lg hover:scale-105"
                    : "block py-4 px-4 text-white rounded-md md:bg-transparent md:text-white md:border-b-0 md:p-2 border-b duration-300 cursor-pointer border-gray-500"
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => handleLogOut()}
                className="btn bg-red-500 border-0 text-white hover:bg-red-600"
              >
                Sign Out
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">
              <button className="btn bg-green-500 border-0 text-white hover:bg-green-600">
                Sign In
              </button>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavigationBar;
