import {useContext} from 'react'

import { myStoreContext } from './ContextProvider';

const ContextChild2 = () => {
//  Step 3 : Consume a context using useContext hook, it accepts a context object (the value returned from createContext)

  let {data1, data2} = useContext(myStoreContext);


  // let data = useContext(myStoreContext);
  // console.log(data);
  
  return (
    <div>
        <h2>Child 2 Component {data1} {data2} {""}</h2>
    </div>
  );
};

export default ContextChild2;