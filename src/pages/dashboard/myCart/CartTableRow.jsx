import { useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import useCart from "../../../hooks/useCart";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

const CartTableRow = ({ item, index, handleRemoveToCart }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  
  const axiosSecure = useAxiosPrivate()
  const [, refetch] = useCart();

  const handleIncrement = async () => {
    const updatedQuantity = item.quantity + 1

    setQuantity(updatedQuantity)
    const updateInfo = {
      quantity: updatedQuantity,
    };
    const updatedRes = await axiosSecure.put(`/my-cart/${item._id}`, updateInfo);
  
    if (updatedRes.data.modifiedCount > 0) {
      refetch();
    }
  };
  
  const handleDecrement = async () => { // Changed from a commented function to an async function

    const updatedQuantity = item.quantity - 1
    setQuantity(updatedQuantity)
    if (item.quantity > 1) { // Added condition to check if quantity is greater than 1
      const updateInfo = { 
        quantity: updatedQuantity // Changed to decrement quantity
      };
      const updatedRes = await axiosSecure.put(`/my-cart/${item._id}`, updateInfo); // Added PUT request for decrementing
  
      if (updatedRes.data.modifiedCount > 0) { // Added check for successful update
        refetch(); // Added refetch call to update data
      }
    }
  };
  
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="py-4">
        <p className="text-center">{index + 1}</p>
      </td>
      <td className="py-4">
        <img
          src={item.orderDetails.image}
          className="w-12 mx-auto"
          alt="productImage"
        />
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {item.orderDetails.phone_name}
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {item.orderDetails.brand}
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {item.orderDetails.category}
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        $ {item.orderDetails.price}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <button
            type="button"
            id="decrement-button-2"
            onClick={handleDecrement}
            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              className="h-2.5 w-2.5 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <input
            type="text"
            id="counter-input-2"
            value={quantity}
            readOnly
            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
          />
          <button
            type="button"
            id="increment-button-2"
            onClick={handleIncrement}
            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              className="h-2.5 w-2.5 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
      </td>
      <td className="px-6 py-4 font-semibold text-red-600 dark:text-red-600">
        $ {quantity * item.orderDetails.price}
      </td>
      <td className="px-6 py-4">
        <MdDeleteSweep
          size={34}
          onClick={() => handleRemoveToCart(item._id)}
          className="mx-auto text-red-600 cursor-pointer"
        />
      </td>
    </tr>
  );
};

export default CartTableRow;
