import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";

const useCart = () => {
  const axiosPrivate = useAxiosPrivate();
  const { user } = useAuth();

  const { data: cartData = [], refetch } = useQuery({
    queryKey: ["cartData", user?.email],
    queryFn: async () => {
      if(!user?.email) return []
      const { data } = await axiosPrivate(`/my-order?email=${user?.email}`);
      return data;
    },
    enabled: !!user?.email
  });
  return [cartData, refetch];
};

export default useCart;
