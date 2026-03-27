import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Layout from "../Pages/Layout";
import PrivateRoute from "./PrivateRoute";

export const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element:  (
          <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
