import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "../views/home/Home";
import { Error404 } from "../components/error404/Error404";
import { Login } from "../views/login/Login";
import { Perfil } from "../views/perfil/Perfil";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/perfil",
    element: <Perfil />,
  },
]);

const myRoutes = () => <RouterProvider router={router} />;
export default myRoutes;
