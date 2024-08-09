import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import PhoneCard from "../../components/PhoneCard";
import BrandBox from "../Brand/BrandBox";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../components/Spinner";

const AllPhones = () => {
  const axiosPublic = useAxiosPublic();
  const [phoneData, setPhoneData] = useState(null);
  const [params] = useSearchParams()
  const brand = params.get('brand')

  useEffect(() => {
    const phoneDetails = async () => {
      const res = await axiosPublic.get(`/all-phones?brand=${brand}`);
      setPhoneData(res.data);
    };
    phoneDetails();
  }, [axiosPublic, brand]);

  if (!phoneData) {
    return <Spinner />
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
