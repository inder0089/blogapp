import React, { useState } from "react";
import logo from "../assets/images/logo.png";
const ForgetPassword = () => {
  const [restData, setRestData] = useState({
    password: "",
    confirmpassword: "",
  });

  const forgetPassword = (e) => {
    const { name, value } = e.target;
    setRestData({ ...restData, [name]: value });
  };
  const { password, confirmpassword } = restData;
  const restFromMap = [
    {
      label: "Password",
      name: "password",
      value: password,
      type: "text",
    },
    {
      label: "Conform Password",
      name: "confirmpassword",
      value: confirmpassword,
      type: "password",
    },
  ];

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
                      <form
                        onSubmit={(e) => {
                          e?.preventDefault(e);
                          console.log(restData);
                        }}
                        className="row g-4"
                      >
                        {restFromMap.map((item, indx) => {
                          const { label, name, value, type } = item;

                          return (
                            <div className="col-12" key={indx}>
                              <label>
                                {label}
                                <span className="text-danger">*</span>
                              </label>
                              <div className="input-group">
                                <div className="input-group-text">
                                  <i className="bi bi-lock-fill"></i>
                                </div>
                                <input
                                  type={type}
                                  className="form-control"
                                  placeholder="Enter Password"
                                  name={name}
                                  value={value}
                                  onChange={forgetPassword}
                                />
                              </div>
                            </div>
                          );
                        })}

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

                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-primary px-4 float-end mt-4"
                          >
                            Rest
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 ps-0 d-none d-md-block">
                    <div className="form-right h-100 bg-primary text-white text-center pt-5">
                      <img style={{ width: "100px" }} src={logo} alt="logo" />
                      <h2 className="fs-1">Welcome Back!!!</h2>
                      <h3 className="mb-3">Rest Pssword</h3>
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
};

export default ForgetPassword;
