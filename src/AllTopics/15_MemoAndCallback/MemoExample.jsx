import React, { useCallback, useMemo, useState } from "react";
import MemoChild from "./MemoChild";

const MemoExample = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  //! It returns function
  // function multiply() {
  //     console.log("I Am Multiply");
  //     return add * 5;
  // }

  //! it returns memoized value
  let multiply = useMemo(() => {
    console.log("I Am Multiply");
    return add * 5;
  }, [add]);
  
  //! it returns memorized function
  const display = useCallback(() => {
    console.log("I am display");
  },[minus])

  return (
    <div className="text-center p-5">
      <h1 className="text-4xl font-bold underline">Learn useMemo And Callback</h1>

      <br />
      <br />
      

      <article className="my-2">
        Addition : {add}
        <button
          className="ms-5 bg-gray-400 px-4 rounded"
          onClick={() => setAdd((prev) => prev + 1)}
        >
          Increment
        </button>
      </article>

      <br />

      <article className="my-2">
        ubstraction : {minus}
        <button
          className="ms-5 bg-gray-400 px-4 rounded"
          onClick={() => setMinus((prev) => prev - 1)}
        >
          Decrement
        </button>
      </article>

      <br />
      <article className="my-2"> Multiplication : {multiply}</article>
      <hr /><br /><br />
    <MemoChild display={display}/>
    </div>
  );
};

export default MemoExample;
