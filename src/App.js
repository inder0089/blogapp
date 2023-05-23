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
import { Routes, Route } from "react-router-dom";
import AddBlog from "./pages/AddBlog";
import BlogDetail from "./pages/BlogDetail";
import Jokes from "./pages/Jokes";
import Todo from "./pages/todo/Todo";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import { useContext, useState } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import ErrorPage from "./pages/ErrorPage";
function App() {
  const [istoken, setIsToken] = useState("asdfghjkl");
  const handleLoggedIn = () => {
    setIsToken(true);
  };
  const handleLogout = () => {
    setIsToken(false);
  };
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
  return (
    <>
      {/* <UserContext.Provider value={user}> */}
      <UserContext.Provider value={{ newUser: user }}>
        <Routes>
          <Route
            element={
              <PrivateRoute istoken={istoken} handleLogout={handleLogout} />
            }
          >
            <Route element={<ErrorPage />} path="*" />

            <Route element={<Body />} path="/" exact />
            <Route element={<About />} path="/about" />
            <Route element={<AddBlog />} path="/addblog" />
            <Route element={<BlogDetail />} path="/blogDetail/:id" />
            <Route element={<Jokes />} path="/jokes" />
            <Route element={<Todo />} path="/todo" />
          </Route>

          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<ForgetPassword />} path="/forgetpassword" />
        </Routes>
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
