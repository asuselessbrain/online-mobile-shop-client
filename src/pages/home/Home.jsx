import LatestPhone from "../../components/latestPhones/LatestPhone";
import Banner from "./banner/Banner";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>AstraGadgets | Home</title>
      </Helmet>
      <Banner />
      <LatestPhone />
    </div>
  );
};

export default Home;
