import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ path }) => {
  let { token } = useAuth();

  if (!token) {
    if (localStorage.getItem("gtfc__token")) {
      token = localStorage.getItem("gtfc__token");
    }
  }

  console.log({ token });
  if (token) {
    return <Outlet />;
  }

  return <Navigate state={{ from: path }} replace to="/login" />;
};

export { PrivateRoute };
