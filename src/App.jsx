import React, { useState } from 'react'
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

import { addTodo } from './store/todoSlice';
import { useDispatch } from 'react-redux/es/exports';

const App = () => {

  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const dispatch = useDispatch()

  const addTask = () => {
    if(!text.trim().length) return
    dispatch(addTodo({text}))
    setText('');
  }

 

  return (
    <div className='App'>
      <AddTodo addTodo={addTask} text={text} setText={setText}/>
     <TodoList />

    </div>
  )
}

export default App