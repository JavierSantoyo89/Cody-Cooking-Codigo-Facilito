import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { Layout } from "../components/parcials/layout/Layout";
import { Home } from "../views/home/Home";
import Login from "../views/login/Login";
import Favorites from "../views/favorites";
import Recipes from "../views/recipes";
import Detail from "../views/detail/Detail";
import { About } from "../views/about/About";
import Apidocs from "../views/apidocs/Apidocs";
import Error404 from "../components/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/apidocs",
        element: <Apidocs />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/recipes",
        element: <Recipes />,
      },
      {
        path: "/favorites",
        element: (
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        ),
      },
    ],
    errorElement: <Error404 />,
  },
]);

const myRoutes = () => <RouterProvider router={router} />;
export default myRoutes;
