import { useState } from "react";
import ManageUserModal from "./ManageUserModal";
import { useMutation } from "@tanstack/react-query";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { toast } from "react-toastify";

const ManageUserTableRow = ({ user, handleDeleteUser, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const axiosPrivate = useAxiosPrivate()

  const {mutateAsync} = useMutation({
    mutationFn: async(updatedUser)=>{
      const {data} = await axiosPrivate.patch(`/users/role/${user?.email}`,updatedUser)
      return data
    },onSuccess(data){
      refetch()
      setIsOpen(false)
      console.log(data)
      toast.success("User role Updated Successfully");
    },onError(err){
      setIsOpen(false)
      toast.error(err.message)
    }
  })

  const modalHandler = async(select) => {
    const updatedUser = {
      role: select,
      status: 'verified',
    }
    await mutateAsync(updatedUser)
  };
  return (
    <tr className="border-b hover:bg-orange-100 bg-gray-100">
      <td className="p-3 px-5">{user.name}</td>
      <td className="p-3 px-5">{user.email}</td>
      <td className="p-3 px-5 capitalize">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {user.status}
        </span>
      </td>
      <td className="p-3 px-5 capitalize">{user.role}</td>
      <td className="p-3 px-5">
        <button
          onClick={() => setIsOpen(true)}
          className="text-sm bg-green-200 hover:bg-green-300 py-1 px-2 rounded "
        >
          Update Role
        </button>
        <ManageUserModal
          user={user}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          modalHandler={modalHandler}
        />
      </td>
      <td className="p-3 px-5">
        <button
          onClick={() => handleDeleteUser(user._id)}
          type="button"
          className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageUserTableRow;
