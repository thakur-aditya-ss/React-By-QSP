// import { configureStore, createSlice} from '@reduxjs/toolkit'
// import {Provider} from "react-redux"
// import Counter from './Counter';


// //! Step - 2 :-
// const counterSlice = createSlice({
//     name: "counter",
//     initialState: 0,
//     reducers: {
//         incre: (prevState, action) => {
//            return prevState + 1;
//         },
//         decre: (prevState, action) => {
//             return prevState - 1;
//         },
//         reset: (prevState, action) => {
//             return (prevState = 0);
//         },
//     },
// });



// //! Step - 1 :-
// const myStore = configureStore({
//     reducer : {
//         counter : counterSlice.reducer,
//         // todo : todoSlice.reducer,
//     },
// });






// const ReduxCounter = () => {
//   return <Provider store={myStore}>
//     <Counter/>
//   </Provider>
  
// };

// export default ReduxCounter;

// ! react


import {configureStore,createSlice} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import Counter from "./Counter";


//! step 2: create a slice 
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    incre: (prevState , action ) => {
      return prevState+1;
    },
    desre: (prevState , action ) => {
      return prevState-1;
    },
    reset: (prevState , action ) => {
      return (prevState=0);
    },
  },
});

//! step 1 : create a store 

const myStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  }
});

export const { incre, desre, reset } = counterSlice.actions;



const ReduxCounter = () => {
  return ( 
<Provider store={myStore}>
     <Counter/> 
  </Provider>
     )
}
export default ReduxCounter;