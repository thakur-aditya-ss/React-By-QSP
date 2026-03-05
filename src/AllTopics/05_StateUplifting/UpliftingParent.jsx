import React, { useState } from 'react'
import UpliftingChildA from './UpliftingChildA';
import UpliftingChildB from './UpliftingChildB';

const UpliftingParent = () => {
//  CReating State 
const [ count, setCount ] = useState(0);

const handleIncrement = () => setCount((prev) => prev + 1);

  return (
    <div>
        <h1> Example Of Sate-UpliftingParent</h1>
        <hr />
        <UpliftingChildA count = {count}/>
        <hr />
        <UpliftingChildB handleIncrement={handleIncrement}/>
        <hr />
    </div>
  );
};

export default UpliftingParent;