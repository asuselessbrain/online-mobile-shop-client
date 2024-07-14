import about from "../../assets/images/about me/about.avif";

const About = () => {
  return (
    <div className="my-10">
        <h2 className="text-center text-6xl m-6 font-medium">About Us</h2>
      <div className="flex flex-cols md:flex-row items-center justify-center">
        <div className="flex-1">
          <img src={about} alt="" />
        </div>
        <div className="flex-1">
          <p className="text-justify">
            Welcome to Astra Gadget, your premier destination for the latest and
            greatest in mobile technology! At Astra Gadget, we are passionate
            about bringing you the most cutting-edge smartphones, accessories,
            and tech gadgets that keep you connected, productive, and
            entertained.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
