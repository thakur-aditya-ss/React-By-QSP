import React from "react";
import { Link, useNavigate } from "react-router-dom";
// useNavigate use hota hai program me data send karne ke liye

const NavBar = () => {
  let token = sessionStorage.getItem("token"); // item present hoga to item dega varna null de dega
  const navigate = useNavigate();

  const handleLogout = () => {
    // logout karne ke bad puchne ke liye hai ki are you confirm to logout
    let confirmMsg = confirm("Are you sure");
    if (confirmMsg) {
      // remove token
      sessionStorage.removeItem("token");

      // navigate to login
      navigate("/login");
    }
  };

  return (
    <header className="py-5  px-10 flex justify-between items-center shadow fixed top-0 w-full bg-white ">
      <figure className="text-3xl font-bold">QManager</figure>

      <nav className="flex items-center gap-10 font-semibold">
        {token ? (
          <>
            <Link to={"/"}> Dashboard</Link>
            <div onClick={handleLogout}>Logout</div>
          </>
        ) : (
          <>
            <Link to={"/login"}> Login</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
