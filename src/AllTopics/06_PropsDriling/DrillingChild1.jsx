import React from 'react'
import DrillingChild2 from './DrillingChild2';

function DrillingChild1({ str, setData}) {
  return (
    <div>
        <h2>DrillingChild1</h2>
        <DrillingChild2 str={str} setData={setData}/>
    </div>
  );
};

export default DrillingChild1