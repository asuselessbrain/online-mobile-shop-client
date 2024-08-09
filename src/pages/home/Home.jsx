import LatestPhone from "./latestPhones/LatestPhone";
import Banner from "./banner/Banner";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";

const Home = () => {
  const axiosPublic = useAxiosPublic();
  const [latestPhone, setLatestPhone] = useState([]);

  useEffect(() => {
    const latestPhones = async () => {
      const res = await axiosPublic.get("/latest-phones");
      setLatestPhone(res.data);
    };
    latestPhones();
  }, [axiosPublic]);

  if (latestPhone.length === 0) {
    return <Spinner />
  }

  return (
    <div>
      <Helmet>
        <title>AstraGadgets | Home</title>
      </Helmet>
      <Banner />
      <LatestPhone latestPhone={latestPhone} />
    </div>
  );
};

export default Home;
