/* eslint-disable react/prop-types */
const PhoneCard = ({ phone }) => {
  const { phone_name,image } = phone;
  return (
    <div>
      <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
          <img
            src={image}
            alt="Product"
            className="object-cover rounded-t-xl"
          />
          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
            <p className="text-lg font-bold text-black truncate block capitalize">
              Product Name
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                BDT 149
              </p>
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
              </del>
              <div className="ml-auto">
                <button>Show Details</button>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default PhoneCard;
