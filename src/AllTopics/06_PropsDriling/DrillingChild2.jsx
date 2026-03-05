import React from 'react'

function DrillingChild2({str , setData}) {
  return (
    <div>
        <h2>DrillingChild2 Component  { str}</h2>
        <button onClick={() => setData("Hii Parents")}> Send Data</button>
    </div>
  );
};

export default DrillingChild2;