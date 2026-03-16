import { useEffect, useState, useRef } from "react";

const LifeCycleInFbc = () => {
  const [count, setCount] = useState(0);
  const initailRender = useRef(true); // {current : true}

  useEffect(() => {
    console.log("Component Mounted");
    let id = setInterval(() => {
        console.log("API CALL");
        
    },1500)

    return () => {
        console.log("Component Unmounted");
        clearInterval(id)
    };
  },[]);

   useEffect(() => {
    if(initailRender.current) {
        initailRender.current = false;
        return;
    }
    console.log("Component Updated");
  },[count]);

  return (
    <div className="p-5">
      <h1 className="text-center text-4xl ">
        Learn LifeCycle In Function Component : {count}
      </h1>

      <button onClick={() => setCount((prev) => prev + 1)} className="p-2 border-3">Increment</button>
    </div>
  );
};

export default LifeCycleInFbc;
