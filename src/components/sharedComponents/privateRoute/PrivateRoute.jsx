import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../../../context/AuthContext";

function PrivateRoute() {
  const { isLogin } = useAuthContext();
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
