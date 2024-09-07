import { IoWalletSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";


const AdminHome = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="flex items-center justify-center gap-4 p-[56px] bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] text-white rounded-xl">
        <IoWalletSharp size={52} />
        <div>
          <h3 className="font-extrabold text-5xl">10000</h3>
          <h5 className="text-2xl">Revenue</h5>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 p-[56px] bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] text-white rounded-xl">
        <FaUsers size={52} />
        <div>
          <h3 className="font-extrabold text-5xl">10000</h3>
          <h5 className="text-2xl">Customers</h5>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 p-[56px] bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white rounded-xl">
        <MdProductionQuantityLimits size={52} />
        <div>
          <h3 className="font-extrabold text-5xl">10000</h3>
          <h5 className="text-2xl">Products</h5>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 p-[56px] bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] text-white rounded-xl">
        <TbTruckDelivery size={52} />
        <div>
          <h3 className="font-extrabold text-5xl">10000</h3>
          <h5 className="text-2xl">Orders</h5>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
