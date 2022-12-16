import React from 'react';
import { FaTrash, FaCheck } from 'react-icons/fa';

const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <ul className="TodoList">
            {todos.map((it) => (
                <li key={it.id}>
                    {it.checked ? (
                        <div className="check">{it.text}</div>
                    ) : (
                        <div
                            className="unCheck"
                            style={{ textDecoration: 'line-through' }}
                        >
                            {it.text}
                        </div>
                    )}

                    <button onClick={() => onToggle(it.id)} className="ckBtn">
                        <FaCheck />
                    </button>
                    <button onClick={() => onRemove(it.id)} className="delBtn">
                        <FaTrash />
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
