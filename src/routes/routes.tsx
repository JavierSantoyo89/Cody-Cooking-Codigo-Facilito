import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "../views/home/Home";
import  Error404  from "../components/Error404";
import Login from "../views/login/Login";
import { Perfil } from "../views/perfil/Perfil";
import { Layout } from "../components/parcials/layout/Layout";
import Favorites from "../views/favorites";
import Recipes from "../views/recipes";
import Detail from "../views/detail/Detail";
import PrivateRoute from "./PrivateRoute";

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
        path: "/perfil",
        element: <Perfil />,
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
