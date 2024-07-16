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

  const brands = [
    {id: 1, name: "All Phones", index: 0},
    {id: 2, name: "Samsung", index: 1},
    {id: 3, name: "Xiaomi", index: 2},
    {id: 4, name: "Apple", index: 3},
    {id: 5, name: "Google", index: 4},
    {id: 6, name: "Huawei", index: 5},
    {id: 7, name: "Realme", index: 6},
    {id: 8, name: "OnePlus", index: 7},
    {id: 9, name: "Oppo", index: 8},
    {id: 10, name: "Vivo", index: 9},
    {id: 11, name: "Nokia", index: 10},
    {id: 12, name: "Motorola", index: 11},
    {id: 13, name: "Tecno", index: 12},
    {id: 14, name: "Infinix", index: 13},
    {id: 15, name: "Walton", index: 14},
    {id: 16, name: "Symphony", index: 15},
  ]

  const applePhones = phoneData.filter((phone) => phone.brand === "Apple ");

  
  const handleTabIndex = (index) => {
    setTabIndex(index);
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 py-10 shadow-xl">

        {
          brands.map(brand => <button key={brand.id} onClick={() => handleTabIndex(brand.index)}
          className={
            tabIndex === brand.index
              ? "font-bold text-xl"
              : "text-base"
          }>{brand.name}</button>)
        }

      </div>
      <div className="my-10">
        {tabIndex === 0 && (
          <div>
            <h2 className="text-3xl text-center font-bold mb-6">All Phones</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
