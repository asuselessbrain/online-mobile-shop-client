// import { format } from 'date-fns'

import { TbCurrencyTaka } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";
import UpdateProduct from "./UpdateProduct";

const ProductRow = ({ product, index, handleDelete }) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white">
        <p className="text-gray-900 whitespace-no-wrap">{index + 1}</p>
      </td>
      <td className="border-b border-gray-200 bg-white">
        <img
          alt="profile"
          src={product?.image}
          className="mx-auto object-cover rounded h-16 "
        />
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white">
        <p className="text-gray-900 whitespace-no-wrap">
          {product?.phone_name}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white">
        <p className="text-gray-900 whitespace-no-wrap">{product?.brand}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white">
        <p className="text-gray-900 whitespace-no-wrap">{product?.category}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white">
        <p className="text-red-600 whitespace-no-wrap flex items-center gap-1">
          {product?.price}
          <TbCurrencyTaka size={20} />
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white">
        <p className="text-green-600 whitespace-no-wrap">
          {product?.launch.status}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white">
        <button
          onClick={() => openModal()}
          className="relative cursor-pointer inline-block p-[16px] font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[#D1A054] rounded-md"
          ></span>
          <span className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
        {/* Update modal */}
        <UpdateProduct isOpen={isOpen} product={product} closeModal={closeModal} />
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white">
        <span
          onClick={() => handleDelete(product._id)}
          className="relative cursor-pointer inline-block p-[16px] font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[#B91C1C] rounded-md"
          ></span>
          <span className="relative">
            <RiDeleteBinLine className="text-white" size={24} />
          </span>
        </span>
        {/* Delete modal */}
      </td>
    </tr>
  );
};

export default ProductRow;
