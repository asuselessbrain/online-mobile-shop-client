import { useEffect } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";

/* eslint-disable react/prop-types */
const PhoneCard = ({ phone }) => {
  const { phone_name,image, price } = phone;
  const axiosPublic = useAxiosPublic()

  const handleShowDetails = () =>{
  }
  return (
    <div>
      <div className="bg-gray-200 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
          <img
            src={image}
            alt="Product"
            className="object-cover mx-auto pt-6 rounded-t-xl"
          />
          <div className="px-10 py-3 mx-auto text-center">
            <p className="text-2xl font-semibold text-black truncate block capitalize">
              {phone_name}
            </p>
            <div className="">
              <p className="text-xl font-semibold text-black cursor-auto my-3">
                BDT <span className="text-red-500 text-lg font-medium">{price}</span>
              </p>
              <div className="ml-auto">
                <Link to="/details"><button onClick={handleShowDetails} className="text-lg bg-gray-100 border-b-4 border-red-500 px-4 py-2 duration-500 rounded-xl hover:scale-105 hover:shadow-xl">Show Details</button></Link>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default PhoneCard;
