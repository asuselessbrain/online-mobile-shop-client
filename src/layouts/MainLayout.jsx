import { Outlet } from "react-router-dom";
import NavBar from "../shared/navBar/NavBar";
import Footer from "../shared/footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="h-[96px]">
        <NavBar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
