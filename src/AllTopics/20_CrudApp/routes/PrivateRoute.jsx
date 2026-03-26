// it is use for protect routing

import { Children } from "react"
import { Navigate } from "react-router-dom"

const PrivateRoute = () => {

    let token = sessionStorage.getItem("token")


  return token ? Children : <Navigate to={"/login"}/>;

};

export default PrivateRoute;