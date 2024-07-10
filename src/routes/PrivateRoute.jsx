import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-bars loading-lg w-[100px] h-[100px]"></span>
      </div>
    );
  }
  if(user){
    return children
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
