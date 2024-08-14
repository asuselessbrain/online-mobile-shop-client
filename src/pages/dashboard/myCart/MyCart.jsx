import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import CartTableRow from "./CartTableRow";
import Swal from "sweetalert2";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
const MyCart = () => {
  const axiosPrivate = useAxiosPrivate();
  const {user} = useAuth()

  const { data: cartData = [], refetch } = useQuery({
    queryKey: ["cartData"],
    queryFn: async() =>{
      const {data} = await axiosPrivate(`/my-order/${user?.email}`)
      return data
    }
  });

  const handleRemoveToCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {
      if (result.isConfirmed) {
        const res = await axiosPrivate.delete(`/delete-item-from-my-cart/${id}`)

        if(res.data.deletedCount > 0){
          refetch()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      }
    });
  }
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
            <th scope="col" className="px-6 py-6 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {
            cartData.map((item, index)=> <CartTableRow item={item} index={index} handleRemoveToCart={handleRemoveToCart} key={item._id} /> )
          }
          
        </tbody>
      </table>
    </div>
  );
};

export default MyCart;
