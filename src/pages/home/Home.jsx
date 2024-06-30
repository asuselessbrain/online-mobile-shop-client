import Banner from "./banner/Banner";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>AstraGadgets | Home</title>
      </Helmet>
      <Banner />
    </div>
  );
};

export default Home;
