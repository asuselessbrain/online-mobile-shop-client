import image from "../../../assets/images/about me/Apple-iPhone-16-Pro-Max.webp";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const MyCart = () => {
  const axiosPrivate = useAxiosPublic();
  const {user} = useAuth()

  const { data: cartData = [] } = useQuery({
    queryKey: ["cartData"],
    queryFn: async() =>{
      const {data} = await axiosPrivate(`/my-order/${user?.email}`)
      return data
    }
  });
  return (
    <div className="relative overflow-x-auto ">
      <div className="flex flex-col space-y-2 md:flex-row mb-10 justify-between items-center">
        <h2 className="text-[34px] font-bold">
        Total orders: {cartData.length}
        </h2>
        <h2 className="text-[34px] font-bold">
        Total Price: $ {cartData.length}
        </h2>
        <button className="text-xl font-semibold px-3 py-2 bg-[#D1A054] text-white rounded">Pay</button>
      </div>
      <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-x-auto shadow-md sm:rounded-lg">
        <thead className="text-white font-semibold uppercase bg-[#D1A054] dark:bg-[#D1A054] dark:text-white">
          <tr>
            <th scope="col" className="text-center px-6 py-6"></th>
            <th scope="col" className="text-center py-6">
              Product Image
            </th>
            <th scope="col" className="px-6 py-6">
              Product
            </th>
            <th scope="col" className="px-6 py-6">
              Brand
            </th>
            <th scope="col" className="px-6 py-6">
              Category
            </th>
            <th scope="col" className="px-6 py-6">
              Qty
            </th>
            <th scope="col" className="px-6 py-6">
              Price
            </th>
            <th scope="col" className="px-6 py-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="py-4">
              <p className="text-center">1</p>
            </td>
            <td className="py-4">
              <img
                src={image}
                className="w-16 md:w-32 max-w-full max-h-full mx-auto"
                alt="Apple Watch"
              />
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              Apple Watch
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              Apple
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              Smart phone
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <button
                  className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button"
                >
                  <span className="sr-only">Quantity button</span>
                  <svg
                    className="w-3 h-3"
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
                <div>
                  <input
                    type="number"
                    id="first_product"
                    className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="1"
                    required
                  />
                </div>
                <button
                  className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button"
                >
                  <span className="sr-only">Quantity button</span>
                  <svg
                    className="w-3 h-3"
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
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              $599
            </td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Remove
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyCart;
