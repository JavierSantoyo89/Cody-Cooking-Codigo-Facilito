import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "../views/home/Home";
import { Error404 } from "../components/error404/Error404";
import Login from "../views/login/Login"
import { Perfil } from "../views/perfil/Perfil";
import { Layout } from "../components/parcials/layout/Layout";
import Favorites from "../views/favorites";
import Recipes from "../views/recipes";
import RecipeDetail from "../views/recipe-detail";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/perfil',
        element: <Perfil />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
      {
        path: "/recipe-detail/:id",
        element: <RecipeDetail />,
      },
    ],
    errorElement: <Error404 />,
  },
]);

const myRoutes = () => <RouterProvider router={router} />;
export default myRoutes;
