import HeaderComp from "./components/HeaderComp";

const App = () => {
  let greet = "Welcome";
  return (
    <>
      <h1>I Am Parent Component</h1>
      <h2>{greet}</h2>  
       {/* yaha par {} Expression hai  */}

       <HeaderComp/>
    </>
  );
};
export default App;

