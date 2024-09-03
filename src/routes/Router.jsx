import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import ContactUs from "../pages/contactUs/ContactUs";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Details from "../pages/details/Details";
import AllPhones from "../pages/allPhones/AllPhones";
import About from "../pages/about/About";
import Dashboard from "../layouts/Dashboard";
import AddProduct from "../pages/dashboard/AddProduct/AddProduct";
import ManageProduct from "../pages/dashboard/manageProduct/ManageProduct";
import Prodile from "../pages/dashboard/profile/Prodile";
import MyCart from "../pages/dashboard/myCart/MyCart";
import ManageUser from "../pages/dashboard/manageUser/ManageUser";
import Payment from "../pages/dashboard/payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-phones",
        element: <AllPhones />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "add-product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      }, //manage-product
      {
        path: "manage-product",
        element: (
          <PrivateRoute>
            <ManageProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Prodile />
          </PrivateRoute>
        ),
      },
      {
        path: "my-cart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-user",
        element: (
          <PrivateRoute>
            <ManageUser />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
