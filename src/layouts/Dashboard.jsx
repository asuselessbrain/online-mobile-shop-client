import { Outlet } from "react-router-dom";
import Sidebar from "../pages/dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-[256px]">
        <Sidebar />
      </div>
      <div className="m-10 flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
