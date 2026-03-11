import { useContext} from 'react'
import { todoContext } from './TodoContextProvider';

const AllTodos = () => {
  let {todos} = useContext(todoContext);
  console.log(todos);
  
  return (
    <div>
        <h2>All Todos</h2>
    </div>
  );
};

export default AllTodos;