/** @format */

import React, { useContext, useState } from "react";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/images/logo.png";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import UserContext from "../utils/UserContext";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  const logoutUs = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };
  // const { user } = useContext(UserContext);
  // const { name, email } = user;
  // console.log("inder", user);

  const newUser = useContext(UserContext);
  const { name, email } = newUser.user;
  console.log("inderjeet singh", newUser);

  // const { user } = useContext(UserContext);
  // const { name, email } = user;
  // console.log("inderjeet singh", user);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img style={{ width: "100px" }} src={logo} alt="logo"></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <Nav className="justify-content-end ms-auto" activeKey="/home">
              <li>User: {name}</li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/jokes">
                  Jokes
                </Link>
              </li>
              <li className="nav-item">
                <Button variant="warning" onClick={logoutUs}>
                  Logout
                </Button>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/todo">
                  Todo
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li> */}
            </Nav>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
