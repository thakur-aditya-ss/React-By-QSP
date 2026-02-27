// import HeaderComp from "./components/HeaderComp";
// const App = () => {
//   let greet = "Welcome";
//   return (
//     <>
//       <h1>I Am Parent Component</h1>
//       <h2>{greet}</h2>  
//        {/* yaha par {} Expression hai  */}

//        <HeaderComp/>
//     </>
//   );
// };
// export default App;

//! belongs to FunctionBased and ClassBased and StatesInFBC and so on.
import ClassBased from "./AllTopics/01_TypesOfComponents/ClassBasedComponents";
import FunctionBased from "./AllTopics/01_TypesOfComponents/FunctionBased";


const App = () => {

  return (
    <>
        <FunctionBased/>
        <ClassBased/>
    </>
  );
};
export default App;