import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";

const useCart = () => {
  const axiosPrivate = useAxiosPrivate();
  const { user } = useAuth();

  const { data: cartData = [], refetch } = useQuery({
    queryKey: ["cartData"],
    queryFn: async () => {
      const { data } = await axiosPrivate(`/my-order/${user?.email}`);
      return data;
    },
  });
  return [cartData, refetch];
};

export default useCart;
