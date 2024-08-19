import { useQuery } from "@tanstack/react-query";
import ManageUserTable from "./ManageUserTable";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import Spinner from "../../../components/Spinner";

const ManageUser = () => {

    const axiosPrivate = useAxiosPrivate()

    const { data: users=[] } = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const {data} = await axiosPrivate.get("/users")
            return data
        }
      })
      if(users.length === 0) return <Spinner />
  return (
    <div className="overflow-x-auto max-w-[1440px] mx-auto px-4 sm:px-8">
      <div className="p-4 flex">
        <h1 className="text-3xl">Users {users.length}</h1>
      </div>
      <div>
        <ManageUserTable users={users} />
      </div>
    </div>
  );
};

export default ManageUser;
