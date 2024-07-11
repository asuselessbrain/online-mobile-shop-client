import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";

const Details = () => {
  const axiosPublic = useAxiosPublic();
  const [phoneDetails, setPhoneDetails] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const phoneDetails = async () => {
      const res = await axiosPublic.get(`/phone-details/${id}`);
      setPhoneDetails(res.data);
    };
    phoneDetails();
  }, [axiosPublic, id]);

  if(!phoneDetails){
    return (
        <div className="flex items-center justify-center min-h-screen">
          <span className="loading loading-bars loading-lg w-[100px] h-[100px]"></span>
        </div>
      );
  }
  return <div>detals page</div>;
};

export default Details;
