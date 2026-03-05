import React from 'react'

const UpliftingChildB = ({handleIncrement}) => {

  return (
    <div>
        <h2>B Component </h2>
        <button onClick={handleIncrement}> Increment</button>
    </div>
  )
}

export default UpliftingChildB;