import { Outlet } from "react-router-dom";
import Footer from "../shared/footer/Footer";
import NavigationBar from "../shared/navBar/NavigationBar";

const MainLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      {/* <div className="h-[96px]">
        <NavBar />
      </div> */}
      <div className="h-[96px]">
        <NavigationBar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
