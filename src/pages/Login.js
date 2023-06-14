/** @format */

import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const [loginData, setLoginData] = useState({
    password: "",
    email: "",
  });
  const navigate = useNavigate();
  const handleLoginData = (e) => {
    const { name: fieldName, value: fieldValue } = e?.target;
    setLoginData({ ...loginData, [fieldName]: fieldValue });
  };

  const loginUser = async (e) => {
    e?.preventDefault();
    console.log(loginData);

    const response = await axios.post(
      `${process.env.REACT_APP_BASE_API_URL}auth/login`,
      loginData
    );
    // local storage
    localStorage.setItem(
      "auth",
      JSON.stringify({
        access_token: response.data.access_token,
        refresh_token: response.data.access_token,
      })
    );
    navigate("/");
    console.log("login res", response);
  };

  useEffect(() => {
    const loginToken = JSON.parse(localStorage.getItem("auth"));
    if (loginToken?.access_token) {
      navigate("/");
    }
    console.log("logintoken", loginToken);
  }, []);
  console.log("inderinder", process.env.REACT_APP_BASE_API_URL);

  // const loginUs = (props) => {
  //   // props.handleLoggedIn();
  //   console.log("login");
  // };

  return (
    <>
      <div className="login-page bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="bg-white shadow rounded">
                <div className="row">
                  <div className="col-md-7 pe-0">
                    <div className="form-left h-100 py-5 px-5">
                      <form onSubmit={loginUser} className="row g-4">
                        <div className="col-12">
                          <label>
                            Email<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="bi bi-person-fill"></i>
                            </div>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Username"
                              name="email"
                              value={loginData.email}
                              onChange={handleLoginData}
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <label>
                            Password<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="bi bi-lock-fill"></i>
                            </div>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Enter Password"
                              name="password"
                              value={loginData.password}
                              onChange={handleLoginData}
                            />
                          </div>
                        </div>

                        {/* <div className="col-sm-6">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="inlineFormCheck"
                            />
                            <label
                              className="form-check-label"
                              for="inlineFormCheck"
                            >
                              Remember me
                            </label>
                          </div>
                        </div> */}

                        <div className="col-sm-6">
                          <Link
                            to="/forgetpassword"
                            className="float-end text-primary"
                          >
                            Forgot Password?
                          </Link>
                        </div>
                        <div className="col-sm-6">
                          <Link
                            to="/register"
                            className="float-end text-primary"
                          >
                            Register New User
                          </Link>
                        </div>

                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-primary px-4 float-end mt-4"
                          >
                            login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 ps-0 d-none d-md-block">
                    <div className="form-right h-100 bg-primary text-white text-center pt-5">
                      <img style={{ width: "100px" }} src={logo} alt="logo" />
                      <h2 className="fs-1">Welcome Back!!!</h2>
                      <h3 className="mb-3">Login Now</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
