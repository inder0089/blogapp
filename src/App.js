import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./pages/Login";
import About from "./pages/About";
import PrivateRoute from "./component/Auth/PrivateRoute";
import Shimmer from "./common/Shimmer";
import { useState } from "react";
import Register from "./pages/Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoggedIn = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      {isLoggedIn ? (
        <>
          <Header handleLogout={handleLogout} />
          <Outlet />
          <Footer />
        </>
      ) : (
        <Login handleLoggedIn={handleLoggedIn} />
      )}
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
