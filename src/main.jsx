//! REACT WAY 
// import { createRoot } from "react-dom/client";

// createRoot(document.getElementById("root")).render(
//     <>
//         <h1>Hello Everyone</h1>
//         <h1>I Am Learning REACT JS</h1>
//     </>                                             // Fragment (<></>) : ye extra div create nahi karta, sirf elements ko group karta hai
// );


//! JS WAY
// const div = document.getElementById("root");
// const h1Tag = document.createElement("h1");
// h1Tag.textContent = "Hello React";
// div.append(h1Tag);


//! belongs to App.jsx

import { createRoot } from "react-dom/client";
import App from "./App";
import ContextProvider from "./AllTopics/07_Context/ContextProvider";
createRoot(document.getElementById("root")).render(<App/>);            // it is React way
// createRoot(document.getElementById("root")).render(<ContextProvider>
//     <App/>
// </ContextProvider>);            // it is use for providing access to all files
// createRoot(document.getElementById("root")).render(App());               // it is Javascript way