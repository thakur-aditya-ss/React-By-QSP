// import {memo} from 'react'
import React from 'react'

const MemoChild = () => {
    console.log("I Am MemoChild Component");
    
  return (
    <div>

         <h1 className="text-4xl font-bold underline">Memo Child Component</h1>
    </div>
  );
};

// export default memo(MemoChild);
export default React.memo(MemoChild);

//! React.memo() OR memo() is used to memorized a component untill its props are unchanged