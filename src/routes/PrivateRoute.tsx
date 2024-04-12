import { Navigate } from "react-router-dom";
import { useUserStore } from "../store/userState";
import { ReactElement } from "react";

const PrivateRoute = ({ children }: { children: ReactElement }) => {
  const uid = useUserStore((state) => state.uid);
  if (uid == undefined || uid == null || uid == "") {
    // console.log("El usuario privado es: ", uid);
    console.log("Redireccionado a home");
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoute;
