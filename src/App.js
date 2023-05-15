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

function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Body /> */}

      {/* <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<Body />} path="/" exact />
          <Route element={<About />} path="/about" exact />
        </Route>
        <Route element={<Login />} path="/login" />
      </Routes> */}
      <Footer />
      {/* <Shimmer /> */}
    </>
  );
}

export default App;
