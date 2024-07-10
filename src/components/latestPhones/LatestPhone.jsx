import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const LatestPhone = () => {
  const axiosPublic = useAxiosPublic();
  const [latestPhoen, setLatestPhone] = useState([])

  useEffect(() => {
    const latestPhones = async () => {
        const res = await axiosPublic.get("/phones");
        setLatestPhone(res.data)
    }
    latestPhones()
  }, []);

  return <div>
    <h2 className="text-6xl my-20 font-Cinzel font-bold text-center">Latest Phones</h2>
  </div>;
};

export default LatestPhone;
