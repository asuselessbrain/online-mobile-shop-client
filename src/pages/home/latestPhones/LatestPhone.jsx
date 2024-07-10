import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import PhoneCard from "../../../components/PhoneCard";
// import { Card } from "@material-tailwind/react";

const LatestPhone = () => {
  const axiosPublic = useAxiosPublic();
  const [latestPhone, setLatestPhone] = useState([]);

  useEffect(() => {
    const latestPhones = async () => {
      const res = await axiosPublic.get("/phones");
      setLatestPhone(res.data);
    };
    latestPhones();
  }, [axiosPublic]);

  return (
    <div>
      <h2 className="text-6xl my-20 font-Cinzel font-bold text-center">
        Latest Phones
      </h2>
      {latestPhone.map((phone) => (
        <PhoneCard key={phone._id} phone={phone} />
      ))}
    </div>
  );
};

export default LatestPhone;
