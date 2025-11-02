import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../Pages/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loadingg } = use(AuthContext);
  const location = useLocation();

    if (loadingg) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;
