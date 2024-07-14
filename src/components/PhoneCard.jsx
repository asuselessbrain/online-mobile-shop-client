import { useEffect } from "react";
import { Link } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";

/* eslint-disable react/prop-types */
const PhoneCard = ({ phone }) => {
  const { phone_name, image, price, _id } = phone;

  return (
    // <div>
    //   <div className="bg-gray-200 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    //     <img
    //       src={image}
    //       alt="Product"
    //       className="object-cover mx-auto pt-6 rounded-t-xl"
    //     />
    //     <div className="px-10 py-3 mx-auto text-center">
    //       <p className="text-2xl font-semibold text-black truncate block capitalize">
    //         {phone_name}
    //       </p>
    //       <div className="">
    //         <p className="text-xl font-semibold text-black cursor-auto my-3">
    //           BDT{" "}
    //           <span className="text-red-500 text-lg font-medium">{price}</span>
    //         </p>
    //         <div className="ml-auto">
    //           <Link to={`/details/${_id}`}>
    //             <button className="text-lg bg-gray-100 border-b-4 border-red-500 px-4 py-2 duration-500 rounded-xl hover:scale-105 hover:shadow-xl">
    //               Show Details
    //             </button>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="card bg-base-100 rounded-xl duration-500 hover:scale-105 hover:shadow-xl shadow-2xl">
      <figure className="mt-4">
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{phone_name}</h2>
        <p className="flex items-center gap-2">
          Price:{" "}
          <span className="flex items-center text-red-500 font-semibold">
            {price}
            <TbCurrencyTaka size={20} />
          </span>
        </p>
        <div className="card-actions justify-start gap-4">
          <button className="btn bg-black hover:bg-black hover:scale-105 duration-600 text-white"><MdOutlineShoppingCart size={20} />Add Cart</button>
          <Link to={`/details/${_id}`}>
            <button className="btn bg-transparent border-2 border-black text-black hover:scale-105 duration-600 hover:bg-transparent hover:border-2 hover:border-black font-semibold">View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
