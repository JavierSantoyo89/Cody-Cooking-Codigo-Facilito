import { Outlet } from "react-router-dom"; // For rendering child routes
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
