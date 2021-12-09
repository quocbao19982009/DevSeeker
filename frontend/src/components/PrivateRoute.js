import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "./layout/Spinner";
import Container from "./layout/Container";

const PrivateRoute = ({ children }) => {
  const { isLogin, loading } = useSelector((state) => state.user);

  if (loading)
    return (
      <Container>
        <Spinner />
      </Container>
    );

  if (isLogin) return children;
  return <Navigate to="/login" />;
};

export default PrivateRoute;
