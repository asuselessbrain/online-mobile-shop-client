import LatestPhone from "./latestPhones/LatestPhone";
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
      <h1>Arfan</h1>
    </div>
  );
};

export default Home;
