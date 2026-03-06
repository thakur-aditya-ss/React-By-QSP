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
import Counter from "./AllTopics/02_States/Counter";
import StatesInCBC from "./AllTopics/02_States/StatesinCBC";
import StatesInFBC from "./AllTopics/02_States/StatesinFBC";
import StateTask1 from "./AllTopics/02_States/StateTask1";
import ThemeChange from "./AllTopics/02_States/TheamChange";
import PropsParent from "./AllTopics/03_Props/PropsParents";
import Child1 from "./AllTopics/04_ChildrenProps/Child1";
import Child2 from "./AllTopics/04_ChildrenProps/Child2";
import ChildrenProps from "./AllTopics/04_ChildrenProps/ChildrenProps";
import ChildrenProps2 from "./AllTopics/04_ChildrenProps/ChildrenProps2";
import UpliftingParent from "./AllTopics/05_StateUplifting/UpliftingParent";
import DrillingParent from "./AllTopics/06_PropsDriling/DrillingParent";


const App = () => {

  return (
    <>
        {/* <FunctionBased/>
        <ClassBased/>
        <StatesInCBC/> */} 

        {/* <StatesInFBC/>
        <ThemeChange/> */}


        {/* <Counter/> */}

        {/* <StateTask1/> */}

        {/* <PropsParent/> */}

        {/* <ChildrenProps/> */}
        {/* <ChildrenProps2>
          <Child1/>
          <Child2/>
        </ChildrenProps2> */}

        {/* <UpliftingParent/> */}
        
        {/* <DrillingParent/> */}

        {/* Context : is use for manage both StateUplifting And DropDriling */}
        

    </>
  );
};
export default App;