/** @format */

import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
// import {
//   BrowserRouter as Router,
//   Outlet,
//   Route,
//   Routes,
// } from "react-router-dom";
import Login from "./pages/Login";
import About from "./pages/About";
import PrivateRoute from "./component/Auth/PrivateRoute";
// import Shimmer from "./common/Shimmer";
// import { useState } from "react";
// import Register from "./pages/Register";
import { Routes, Route, useNavigate } from "react-router-dom";
import AddBlog from "./pages/AddBlog";
import BlogDetail from "./pages/BlogDetail";
import Jokes from "./pages/Jokes";
import Todo from "./pages/todo/Todo";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import { useContext, useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
// import { Provider } from "react-redux";
import ErrorPage from "./pages/ErrorPage";
import { TodoApi } from "./pages/todo/TodoApi";
import NewRegister from "./pages/NewRegister";
function App() {
  const [istoken, setIsToken] = useState(false);
  // const handleLoggedIn = () => {
  //   setIsToken(true);
  // };
  // const handleLogout = () => {
  //   setIsToken(false);
  // };
  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLoggedIn = () => {
  //   setIsLoggedIn(true);
  // };
  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  // };
  // const user = useContext(UserContext);
  const [user, setUser] = useState({
    name: "inder",
    email: "inder@gmail.com",
  });

  useEffect(() => {
    const logintoken = JSON.parse(localStorage.getItem("auth"));
    console.log("logintoken", logintoken);
    if (!logintoken?.access_token) {
      navigate("/login");
      setIsToken(false);
    } else {
      setIsToken(true);
    }
  }, []);

  return (
    <>
      {/* <UserContext.Provider value={user}> */}
      <UserContext.Provider value={{ newUser: user }}>
        {istoken && <Header />}

        <Routes>
          <Route element={<ErrorPage />} path="*" />
          <Route element={<Body />} path="/" exact />
          <Route element={<About />} path="/about" />
          <Route element={<AddBlog />} path="/addblog" />
          <Route element={<BlogDetail />} path="/blogDetail/:id" />
          <Route element={<Jokes />} path="/jokes" />
          <Route element={<Todo />} path="/todo" />
          <Route element={<TodoApi />} path="/todoapi" />

          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<ForgetPassword />} path="/forgetpassword" />
          <Route element={<NewRegister />} path="/newregister" />
        </Routes>
        {istoken && <Footer />}
      </UserContext.Provider>

      {/* {isLoggedIn ? (
        <>
          <Header handleLogout={handleLogout} />
          <Outlet />
          <Footer />
        </>
      ) : (
        <Login handleLoggedIn={handleLoggedIn} />
      )} */}
      {/* <Body /> */}
      {/* <Header handleLogout={handleLogout} />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<Body />} path="/" exact />
          <Route element={<About />} path="/about" exact />
        </Route>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/login" />
      </Routes>
      <Footer /> */}
      {/* <Shimmer /> */}
    </>
  );
}

export default App;
