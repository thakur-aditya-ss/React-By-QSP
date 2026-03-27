// it is use for protect routing


import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}) => {

    let token = sessionStorage.getItem("token")


  return token ? children : <Navigate to={"/login"}/>;

};

export default PrivateRoute;