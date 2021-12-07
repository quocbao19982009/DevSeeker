import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "./layout/Spinner";

const PrivateRoute = ({ children }) => {
  const { isLogin, loading } = useSelector((state) => state.user);

  if (isLogin && !loading) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
