import TodoItem from "./TodoItem"

import { useSelector } from "react-redux/es/hooks/useSelector"

const TodoList = () => {

  const todos = useSelector( state => state.todos.todos );

  return (
    <div>
    {
      todos.map(todo => 
        <TodoItem
          key={todo.id}
          {...todo}
          />
      )
    }
 </div>
  )
}

export default TodoList