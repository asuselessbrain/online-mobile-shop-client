import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import ProductRow from "./ProductRow";

const ManageProduct = () => {
  const axiosSecure = useAxiosPublic();
  const { user } = useAuth();
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["my_added_product, user?.email"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/my-added-phone/${user?.email}`);
      return data;
    },
  });

  console.log(products)

  if (isLoading) {
    <progress className="progress w-56"></progress>;
  }
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
      <div className="py-8">
        <h2 className="text-[34px] font-bold">
          Total Products: {products.length}
        </h2>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-t-2xl overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead className="bg-[#D1A054]">
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-6  border-b border-gray-200 text-white text-left font-semibold uppercase"
                  ></th>
                  <th
                    scope="col"
                    className="border-b border-gray-200 text-white text-left font-semibold uppercase"
                  >
                    Product Image
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-6  border-b border-gray-200 text-white text-left font-semibold uppercase"
                  >
                    Product Name
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-6  border-b border-gray-200 text-white text-left font-semibold uppercase"
                  >
                    Brand
                  </th>
                <th
                    scope="col"
                    className="px-5 py-6  border-b border-gray-200 text-white text-left font-semibold uppercase"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-6  border-b border-gray-200 text-white text-left font-semibold uppercase"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-6  border-b border-gray-200 text-white text-left font-semibold uppercase"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-6  border-b border-gray-200 text-white text-left font-semibold uppercase"
                  >
                    Update
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-6  border-b border-gray-200 text-white text-left font-semibold uppercase"
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <ProductRow key={product._id} product={product} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
