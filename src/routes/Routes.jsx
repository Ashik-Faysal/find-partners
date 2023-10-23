import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPages";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Details from "../components/HomePage/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(
            `https://find-partners-server.vercel.app/recommended/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
