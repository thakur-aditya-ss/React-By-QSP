// import React from 'react'

// const Counter = () => {
//   return (
//     <div className='text-center p-5'>
//         <h1 className='text-4xl font-bold m-5'>Counter : 0</h1>

//         <button className='px-10 bg-green-400 me-3'>Increment</button>
//     </div>
//   );
// };

// export default Counter;

// !

import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { incre, desre, reset } from './ReduxCounter';

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  
  return (
    <div className='text-center p-5'>
<h1 className='text-4xl font-bold mb-5'>Counter: {count} </h1>

      <button className='px-10 bg-green-400 me-3' onClick={() => dispatch(incre())}>Increment</button>
      <button className='px-10 bg-red-400 me-3' onClick={() => dispatch(desre())}>Decrement</button>
      <button className='px-10 bg-blue-400' onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter;