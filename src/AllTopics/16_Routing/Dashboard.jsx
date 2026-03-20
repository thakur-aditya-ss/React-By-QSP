// import { useState } from 'react'
// import Nav from './Nav';
// import Home from './Home';
// import About from './About';

// const Dashboard = () => {
//     const [path, setPath] = useState("/")
//   return (
//     <div>
        
//     <Nav setPath={setPath}/>

//     {path === "/" && <Home/>}
//     {path === "/about" && <About/>}
//     </div>
//   );
// };

// export default Dashboard;

// ! Using Routing - React Router DOM

import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Home from "./Home"
import About from './About'
import Nav from './Nav'

const Dashboard = () => {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default Dashboard;