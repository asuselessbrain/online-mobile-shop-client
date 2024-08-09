import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useRole = () => {
  const axiosSecure = useAxiosPublic();
  const { user, loading } = useAuth();
  const {
    isLoading,
    data: role,
  } = useQuery({
    queryKey: ["role"],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/user-role/${user?.email}`);
      return data.role
    },
  });

  return [role, isLoading];

};

export default useRole;
