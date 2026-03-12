import { useContext} from 'react'
import { todoContext } from './TodoContextProvider';

const AllTodos = () => {
  let {todos, editTodo, removeTodo} = useContext(todoContext);
  console.log(todos);
  
  return (
    <div>
        {todos.length === 0? (<p>No todos available</p>) : (<div>

        {todos.map((ele,index)=>{

          return(
          <section key={ele.id}>
            <h3>{ele.text}</h3>
            <button onClick={() => editTodo(ele.id)}>Edit</button>
            <button onClick={() => removeTodo(ele.id)}>Delete</button>
          </section>
          );
        })}
         </div>
      )}

    </div>
  );
};

export default AllTodos;