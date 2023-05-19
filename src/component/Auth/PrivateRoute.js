import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
const PrivateRoute = (props) => {
  console.log(props);
  let auth = { token: props.istoken };
  return auth.token ? (
    <>
      <Header handleLogout={props.handleLogout} />
      <Outlet handleLoggedIn={props.handleLoggedIn} /> <Footer />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
