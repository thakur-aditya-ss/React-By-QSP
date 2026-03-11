import { useContext } from "react";
import { todoContext } from "./TodoContextProvider";

const CreateTodo = () => {
  // let val = useContext(todoContext);
  // console.log(val);

  let { newTodo, setNewTodo, addTodo } = useContext(todoContext);

  return (
    <div>
      <h2>Create Todo</h2>

      <form onSubmit={addTodo}>
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Enter Todo..."
          required
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default CreateTodo;
