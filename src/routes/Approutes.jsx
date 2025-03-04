import { Navigate, Route, Routes, useLocation } from "react-router";
import { routes } from "./routes.constant";
import PrivateRoute from "../components/sharedComponents/privateRoute/PrivateRoute";
import { useAuthContext } from "../context/AuthContext";

function Approutes() {
  const { pathname } = useLocation();
  const { isLogin } = useAuthContext();
  return (
    <Routes>
      {routes.map((route) =>
        route.isPrivat ? (
          <Route key={route.path} element={<PrivateRoute />}>
            <Route  path={route.path} element={route.element} />
          </Route>
        ) : (
          <Route
            key={route.path}
            path={route.path}
            element={
              pathname == "/login" && isLogin ? (
                <Navigate to="/dashboard" />
              ) : (
                route.element
              )
            }
          />
        )
      )}
    </Routes>
  );
}

export default Approutes;
