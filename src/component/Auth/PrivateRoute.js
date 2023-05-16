import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = () => {
  let auth = { token: false };
  return auth.token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
