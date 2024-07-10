import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Card } from "@material-tailwind/react";

const LatestPhone = () => {
  const axiosPublic = useAxiosPublic();
  const [latestPhone, setLatestPhone] = useState([])

  useEffect(() => {
    const latestPhones = async () => {
        const res = await axiosPublic.get("/phones");
        setLatestPhone(res.data)
    }
    latestPhones()
  }, []);

  return <div>
    <h2 className="text-6xl my-20 font-Cinzel font-bold text-center">Latest Phones</h2>
    {
      latestPhone.map(phone => <Card key={phone._id} />)
    }
  </div>;
};

export default LatestPhone;
