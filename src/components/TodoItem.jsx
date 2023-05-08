import React from 'react';

import { removeTodo, toggleComplete } from '../store/todoSlice';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';

const TodoItem = ({id, completed, text}) => {

    const dispatch = useDispatch(); 

    return (
        <ul>
            <li>
                <input type="checkbox" checked={completed} onChange={() => dispatch(toggleComplete({id}))} />
                <span>{text}</span>
                <span onClick={() => dispatch(removeTodo({id}))}>&times;</span>
            </li>
        </ul>
    )
}

export default TodoItem