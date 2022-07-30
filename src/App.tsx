import { useSelector, useDispatch } from "react-redux"

import { addTodo } from './features/todos/todosSlice'

import { getTodos } from './features/todos/todosSlice'

function App() {

  const todos = useSelector(getTodos)

  const dispatch = useDispatch()

  return (
    <div>

      <button onClick={() => dispatch(addTodo(7))}>Add Item</button>
    </div>
  );
}

export default App;