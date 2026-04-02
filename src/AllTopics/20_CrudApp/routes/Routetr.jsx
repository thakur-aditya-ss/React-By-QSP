import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Layout from "../Pages/Layout";
import PrivateRoute from "./PrivateRoute";
import AllUsersPage from "../Pages/AllUsersPage";
import CreateUserPage from "../Pages/CreateUserPage";

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
      {
        path: "/create-user",
        element: (<PrivateRoute>
          <CreateUserPage/>
        </PrivateRoute>),
      },
      {
        path : "all-users",
        element: (
          <PrivateRoute>
            <AllUsersPage/>
          </PrivateRoute>
        )
      }
    ],
  },
]);
