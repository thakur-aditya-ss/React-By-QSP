import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <main className="">
      <Toaster />
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Layout;