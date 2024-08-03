import { Link, Outlet } from "react-router-dom";
import Sidebar from "../pages/dashboard/Sidebar";
import { AiOutlineMenu, AiOutlineMenuFold } from "react-icons/ai";
import { useState } from "react";
import logo from "../assets/images/logo.png";

const Dashboard = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div>
      <div className="lg:hidden flex justify-between items-center w-full bg-gray-50 py-2 px-6 border-b">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-16" alt="astra-gadgets logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            AstraGadgets
          </span>
        </Link>
        <button onClick={handleToggle} className="text-gray-600">
          {isActive ? (
            <AiOutlineMenuFold size={34} />
          ) : (
            <AiOutlineMenu size={34} />
          )}
        </button>
      </div>
      <div className="flex">
        <div className="lg:w-[256px]">
          <Sidebar isActive={isActive} setActive = {setActive} />
        </div>
        <div className="lg:m-10 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
