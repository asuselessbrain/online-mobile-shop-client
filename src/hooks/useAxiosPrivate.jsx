import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  const axiosPrivate = axios.create({
    baseURL: "http://localhost:3000/",
    withCredentials: true,
  });

  axiosPrivate.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    async function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      const status = error.response.status;

      console.log(status)

      if (status === 401 || status === 403) {
        await logOut()
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosPrivate;
};

export default useAxiosPrivate;
