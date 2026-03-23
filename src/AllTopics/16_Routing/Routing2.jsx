import { createBrowserRouter, RouterContextProvider, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import NotFound from "./NotFound";

const MyRoutes = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
                path:"/",
                element: <Home/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path:"/services",
                element: <Services/>
            },

            {
                path:"*",
                element: <NotFound/>
            }
        ],
    },
]);

const Routing2 = () => {
    return  <RouterProvider router={MyRoutes}/>

};

export default Routing2;