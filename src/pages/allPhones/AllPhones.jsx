import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import PhoneCard from "../../components/PhoneCard";
import BrandBox from "../Brand/BrandBox";

const AllPhones = () => {
  const axiosPublic = useAxiosPublic();
  const [phoneData, setPhoneData] = useState(null);

  useEffect(() => {
    const phoneDetails = async () => {
      const res = await axiosPublic.get("/all-phones");
      setPhoneData(res.data);
    };
    phoneDetails();
  }, [axiosPublic]);

  if (!phoneData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  

  return (
    <div>
      <div className="my-6">
        <BrandBox />
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {phoneData.map((phone) => (
              <PhoneCard key={phone._id} phone={phone} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPhones;
