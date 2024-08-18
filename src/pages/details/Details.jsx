import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Spinner from "../../components/Spinner";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const Details = () => {
  const axiosSecure = useAxiosPrivate();
  const [phoneDetails, setPhoneDetails] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const phoneDetails = async () => {
      const res = await axiosSecure.get(`/phone-details/${id}`);
      setPhoneDetails(res.data);
    };
    phoneDetails();
  }, [axiosSecure, id]);

  if (!phoneDetails) return <Spinner />
  
  return (
    <div className="py-8">
      <Helmet>
        <title>AstraGadgets / {phoneDetails.phone_name}</title>
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
          <div className="px-4">
            <div className="rounded-lg mb-4">
              <img
                className="object-cover mx-auto"
                src={phoneDetails.image}
                alt="Product Image"
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="px-2">
                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  Add to Cart
                </button>
              </div>
              <div className="px-2">
                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
              {phoneDetails.phone_name}
            </h2>
            <div className="flex gap-4 mb-6">
              <div>
                <span className="font-semibold text-lg text-gray-700 dark:text-gray-300">
                  Brand:
                </span>
                <span className="text-black ml-2 bg-gray-300 px-4 rounded-full py-2">
                  {phoneDetails.brand}
                </span>
              </div>
              <div>
                <span className="font-semibold text-lg text-gray-700 dark:text-gray-300">
                  Price:
                </span>
                <span className="ml-2 font-bold text-red-500 bg-gray-300 px-4 rounded-full py-2">
                  {" "}
                  TK {phoneDetails.price}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Availability: 
                </span>
                <span className="text-black ml-2 bg-gray-300 px-4 rounded-full py-2">
                  In Stock
                </span>
              </div>
            </div>
            <div className="mb-2">
              <span className="font-bold text-xl text-gray-700 dark:text-gray-300">
                Features:
              </span>
              <div className="pl-8 mt-6 space-y-2">
                <li>
                  <span className="text-lg font-semibold mr-2">Display : </span>
                  {phoneDetails.mainFeatures.displaySize}
                </li>
                <li>
                  <span className="text-lg font-semibold mr-2">Storage : </span>
                  {phoneDetails.mainFeatures.storage}
                </li>
                <li>
                  <span className="text-lg font-semibold mr-2">ChopSet : </span>
                  {phoneDetails.mainFeatures.chipSet}
                </li>
                <li>
                  <span className="text-lg font-semibold mr-2">Memory : </span>
                  {phoneDetails.mainFeatures.memory}
                </li>
                <li>
                  <span className="text-lg font-semibold mr-2">Sensors : </span>
                  <p className="ml-6">
                    - {phoneDetails.mainFeatures.sensors[0]}
                  </p>
                  <p className="ml-6">
                    - {phoneDetails.mainFeatures.sensors[1]}
                  </p>
                  <p className="ml-6">
                    - {phoneDetails.mainFeatures.sensors[2]}
                  </p>
                  <p className="ml-6">
                    - {phoneDetails.mainFeatures.sensors[3]}
                  </p>
                  <p className="ml-6">
                    - {phoneDetails.mainFeatures.sensors[4]}
                  </p>
                  <p className="ml-6">
                    - {phoneDetails.mainFeatures.sensors[5]}
                  </p>
                </li>
              </div>
            </div>
            <div className="mb-4">
              <span className="text-gray-900 dark:text-gray-300">
                <span className="text-lg font-semibold mr-2">Release :</span>{" "}
                {phoneDetails.releaseDate}
              </span>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Integer euismod libero id mauris malesuada
                tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis
                dapibus augue vel ipsum pretium, et venenatis sem blandit.
                Quisque ut erat vitae nisi ultrices placerat non eget velit.
                Integer ornare mi sed ipsum lacinia, non sagittis mauris
                blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt
                mi consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
