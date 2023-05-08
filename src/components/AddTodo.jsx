import React from 'react'

const AddTodo = ({text,  setText, addTodo}) => {
  return (
    <div className='AddTodo'>
         <input type="text" value={text} onChange={e => setText(e.target.value)}  />
         <button onClick={addTodo}>Add Todo</button>
      </div>
  )
}

export default AddTodo