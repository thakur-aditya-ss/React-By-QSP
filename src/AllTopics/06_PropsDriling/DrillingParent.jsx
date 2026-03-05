import React, { useState } from 'react'
import DrillingChild1 from './DrillingChild1';

function DrillingParent() {
  const [data, setData] = useState("");
  let str = "Hello Nested Child";
  return (
    <div>
        <h1>Learn Props DrillingParent : {data}</h1>
        <DrillingChild1 str = {str} setData={setData}/>
    </div>
  );
};

export default DrillingParent;