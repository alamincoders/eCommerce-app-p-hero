import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./components/screens/ErrorPage";
import Blogs from "./routes/Blogs";
import About from "./routes/About";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Payment from "./routes/Payment";
import Contact from "./routes/Contact";
import Category from "./routes/Category";
import BlogDetails from "./routes/BlogDetails";
import ProductDetails from "./routes/ProductDetails";
import Faq from "./routes/Faq";
import Cart from "./routes/Cart";
import Checkout from "./routes/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Root />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/blogs/:id",
    element: <BlogDetails />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/category/:id",
    element: <ProductDetails />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
