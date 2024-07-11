import {
    useQuery,
  } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTannstenQuery = () => {
    const axiosPublic = useAxiosPublic()
    const {  data: phones = [] } = useQuery({
        queryKey: ['phones'],
        queryFn: async() =>{
        //   fetch('https://api.github.com/repos/TanStack/query').then((res) =>
        //     res.json(),
        //   ),
            const res = await axiosPublic.get("/phones")
            return res.data;
        }
        
    })
    return [phones]
};

export default useTannstenQuery;