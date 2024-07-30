import { Outlet } from "react-router-dom";
import Sidebar from "../pages/dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="m-10 bg-red-500 flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
