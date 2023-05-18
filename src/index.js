/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import About from "./pages/About";
// import Login from "./pages/Login";
// import Body from "./component/Body";
// import PrivateRoute from "./component/Auth/PrivateRoute";
// import Todo from "./pages/todo/Todo";
// import BlogDetail from "./pages/BlogDetail";
// import Jokes from "./pages/Jokes";
// import Register from "./pages/Register";
// import ForgetPassword from "./pages/ForgetPassword";
// import ErrorPage from "./pages/ErrorPage";
// import AddBlog from "./pages/AddBlog";
import { BrowserRouter } from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/addblog",
//         element: <AddBlog />,
//       },
//       {
//         path: "/blogDetail/:id",
//         element: <BlogDetail />,
//       },
//       {
//         path: "/jokes",
//         element: <Jokes />,
//       },
//       {
//         path: "/register",
//         element: <Register />,
//       },
//       {
//         path: "/forgetpassword",
//         element: <ForgetPassword />,
//       },
//       {
//         path: "/todo",
//         element: <Todo />,
//       },
//     ],
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={router} />);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
