import { RouterProvider} from 'react-router-dom'
import { myRoutes } from './routes/Routetr';


const CrudApp = () => {
  return <RouterProvider router={myRoutes}/>
};

export default CrudApp;