/** @format */

import React, { useState } from "react";
import logo from "../assets/images/logo.png";

const Register = () => {
  //   const [Username, setUsername] = useState("");
  //   const [email, setEamil] = useState("");
  //   const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    username: "abcd",
    email: "",
    password: "",
    PHnumber: "",
    // 'inder sing': '29'
  });
  const handalFormValue = (e) => {
    const { value: fieldValue, name: fieldName } = e?.target;

    setFormData({
      ...formData,
      [fieldName]: fieldValue,
    });
  };
  console.log(formData);

  const { email, password, username } = formData;

  //   const { email, password, username } = reduxReducer

  //   console.log(formData['inder sing']);

  const arr = ["rahul", "Mohit ji", "Inder", "Rushikesh"];

  //   console?.log("Arr ==>", arr[0]);

  //   const roomate1 = arr[0]
  //   const roomate2 = arr[1]

  //   const [roomate1, , roomarte3] = arr;

  //   console.log(roomate1, roomarte3);

  const formMap = [
    {
      fieldName: "username",
      fieldValue: username,
      label: "Username",
    },
    {
      fieldName: "email",
      fieldValue: email,
      label: "Email",
    },
    {
      fieldName: "password",
      fieldValue: password,
      label: "Password",
      type: "password",
    },
    {
      fieldName: "PHnumber",
      fieldValue: formData?.PHnumber,
      label: "PH number",
      type: "number",
      inputIcon: "bi bi-telephone",
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
                          e?.preventDefault();
                          console.log("formadata with api call ==>", formData);
                        }}
                        className="row g-4"
                      >
                        {formMap?.map((item) => {
                          const {
                            fieldName,
                            fieldValue,
                            label,
                            type,
                            inputIcon,
                          } = item;

                          return (
                            <div className="col-12">
                              <label>
                                {label}
                                <span className="text-danger">*</span>
                              </label>
                              <div className="input-group">
                                <div className="input-group-text">
                                  <i
                                    className={
                                      inputIcon
                                        ? inputIcon
                                        : "bi bi-person-fill"
                                    }
                                  ></i>
                                </div>
                                <input
                                  type={type ? type : "text"}
                                  className="form-control"
                                  placeholder={`Enter ${label}`}
                                  value={fieldValue}
                                  name={fieldName}
                                  onChange={(e) => handalFormValue(e)}
                                />
                              </div>
                            </div>
                            // <FromInput
                            //   item={item}
                            //   handalFormValue={handalFormValue}
                            // />
                          );
                        })}

                        <div className="col-sm-6">
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
                        </div>

                        <div className="col-sm-6">
                          <a href="#" className="float-end text-primary">
                            Forgot Password?
                          </a>
                        </div>

                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-primary px-4 float-end mt-4"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 ps-0 d-none d-md-block">
                    <div className="form-right h-100 bg-primary text-white text-center pt-5">
                      <img style={{ width: "100px" }} src={logo} alt="logo" />
                      <h2 className="fs-1">Welcome Back!!!</h2>
                      <h3 className="mb-3">Register</h3>
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

export default Register;
