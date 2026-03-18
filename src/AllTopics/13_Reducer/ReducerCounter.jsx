import React, { useReducer } from "react";
let initialState = 0;
const reducerFunc = (prevState, action) => {
  switch (action) {
    case "incre":
      return prevState + 1;
    case "decre":
      return prevState - 1;
    case "reset":
      return 0;
  }
};

const ReducerCounter = () => {
  // const [count, dispatch] = useReducer(() =>{},0); // direct way to call
  const [count, dispatch] = useReducer(reducerFunc, initialState);

  return (
    <div>
      <h1 className=" text-center text-4xl font-bold underline">
        Learn useReducer Hook
      </h1>
      <br />
      <p className="text-2xl text-center">
        useReducer is a state management hook used for complex state management
      </p>

      <h1 className=" text-center text-3xl font-bold "> Counter : {count}</h1>

      <button
        className="p-3 border-2 text-white bg-amber-900 "
        onClick={() => dispatch("incre")}
      >
        Increment
      </button>
      <br />

      <button
        className="p-3 border-2 text-white bg-amber-900"
        onClick={() => dispatch("decre")}
      >
        Decrement
      </button>
      <br />

      <button
        className="p-3 border-2 text-white bg-amber-900"
        onClick={() => dispatch("reset")}
      >
        Reset All
      </button>
    </div>
  );
};

export default ReducerCounter;
