import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import MyProfile from "../Pages/MyProfile/MyProfile";
import About from "../Components/About/About";
import Register from "../Pages/Register/Register";
import Loading from "../Pages/Loading/Loading";
import Login from "../Pages/LogIn/Login";
import PrivateRoute from "../provider/PrivateRoute";
import SkilledDetails from "../Pages/SkilledDetails/SkilledDetails";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Contact from "../Components/Contact/Contact";
import AllSkill from "../Components/AllSkill/AllSkill";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/all-skill",
        Component: AllSkill,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/skillDetails/:id",
        element: <SkilledDetails></SkilledDetails>,
        loader: () => fetch("/skilledData.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
]);
