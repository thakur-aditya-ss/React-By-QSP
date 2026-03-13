import React from 'react'
import ContextChild2 from './ContextChild2';

const ContextChild1 = () => {
  return (
    <div>
        <h2>Child 1 Component</h2>
        <ContextChild2/>
    </div>
  );
};

export default ContextChild1;

// Context is use to avoid prop-drilling