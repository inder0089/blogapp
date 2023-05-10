import React from "react";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/images/logo.png";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <Link to="/" class="navbar-brand">
            <img style={{ width: "100px" }} src={logo} alt="logo"></img>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <Nav className="justify-content-end ms-auto" activeKey="/home">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/todo">
                  Todo
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </Nav>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
