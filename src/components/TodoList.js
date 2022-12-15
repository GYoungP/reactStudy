import React from 'react';
import { FaTrash, FaCheck } from 'react-icons/fa';

const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <ul className="TodoList">
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.checked ? (
                        <div className="check">{todo.text}</div>
                    ) : (
                        <div
                            className="unCheck"
                            style={{ textDecoration: 'line-through' }}
                        >
                            {todo.text}
                        </div>
                    )}

                    <button onClick={() => onToggle(todo.id)} className="ckBtn">
                        <FaCheck />
                    </button>
                    <button
                        onClick={() => onRemove(todo.id)}
                        className="delBtn"
                    >
                        <FaTrash />
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
