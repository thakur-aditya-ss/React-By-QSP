import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout";
import Login from "../Pages/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import CreateUserPage from "../Pages/CreateUserPage";
import AllUsersPage from "../Pages/AllUsersPage";
import EditUserPage from "../Pages/EditUserPage";

export const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/create-user",
        element: (
          <PrivateRoute>
            <CreateUserPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-users",
        element: (
          <PrivateRoute>
            <AllUsersPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-user/:id", // dynamic route
        element: (
          <PrivateRoute>
            <EditUserPage />
          </PrivateRoute>
        ),
      },
      
    ],
  },
]);