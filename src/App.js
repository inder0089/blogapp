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
import { useState } from "react";
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
  return (
    <>
      <Routes>
        <Route
          element={
            <PrivateRoute istoken={istoken} handleLogout={handleLogout} />
          }
        >
          <Route element={<Body />} path="/" exact />
          <Route element={<About />} path="/about" />
          <Route element={<AddBlog />} path="/addblog" />
          <Route element={<BlogDetail />} path="/blogDetail/:id" />
          <Route element={<Jokes />} path="/jokes" />
          <Route element={<Todo />} path="/todo" />
        </Route>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/login" />
        <Route element={<ForgetPassword />} path="/login" />
      </Routes>

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
