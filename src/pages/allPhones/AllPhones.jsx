import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import PhoneCard from "../../components/PhoneCard";

const AllPhones = () => {
  const axiosPublic = useAxiosPublic();
  const [phoneData, setPhoneData] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);

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

  const applePhones = phoneData.filter((phone) => phone.brand === "Apple ");

  const handleTabIndex = (index) => {
    setTabIndex(index);
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <button
          onClick={() => handleTabIndex(0)}
          className={
            tabIndex === 0
              ? "font-bold btn text-red-500 text-base"
              : "btn text-base"
          }
        >
          All Phones
        </button>
        <button
          onClick={() => handleTabIndex(1)}
          className={
            tabIndex === 1
              ? "font-bold btn text-red-500 text-base"
              : "btn text-base"
          }
        >
          Apple
        </button>
        
      </div>
      <div className="flex-1 my-10">
        {tabIndex === 0 && (
          <div>
            <h2 className="text-3xl text-center font-bold mb-6">All Phones</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {phoneData.map((phone) => (
                <PhoneCard key={phone._id} phone={phone} />
              ))}
            </div>
          </div>
        )}
      </div>
      {tabIndex === 1 && (
        <div>
          <h2>Tab2</h2>
        </div>
      )}
    </div>
  );
};

export default AllPhones;
