// Function based component : rafce

import React from 'react'

// const ChildrenProps2 = (Props) =>{
    // console.log(Props);
    const ChildrenProps2 = ({children}) => {
    
  return (
    <div>
        <h1>ChildrenProps2</h1>
        {/* props.children; */}
        {children}
    </div>
  )
}

export default ChildrenProps2;

//!  Example to understand
// function greet(val) => {
//     console.log(val);
//     let {} = val;
// }
// a = {fname : "John"}

//! yaha par direct destructure kre hai 
// function greet(fname) => {
//     console.log(fname);
// }