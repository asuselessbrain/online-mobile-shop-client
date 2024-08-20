import { useQuery } from "@tanstack/react-query";
import ManageUserTable from "./ManageUserTable";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import Spinner from "../../../components/Spinner";
import Swal from "sweetalert2";

const ManageUser = () => {
  const axiosPrivate = useAxiosPrivate();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosPrivate.get("/users");
      return data;
    },
  });
  const handleDeleteUser = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosPrivate.delete(`/delete-user/${id}`);
        if (data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  if (users.length === 0) return <Spinner />;
  return (
    <div className="overflow-x-auto max-w-[1440px] mx-auto px-4 sm:px-8">
      <div className="p-4 flex">
        <h1 className="text-3xl">Users {users.length}</h1>
      </div>
      <div>
        <ManageUserTable users={users} handleDeleteUser={handleDeleteUser} />
      </div>
    </div>
  );
};

export default ManageUser;
