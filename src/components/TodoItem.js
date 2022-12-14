import React from 'react';
import { FaTrash, FaCheck } from 'react-icons/fa';

const TodoItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;

    return (
        <li>
            {checked ? (
                <div className="check">{text}</div>
            ) : (
                <div
                    className="unCheck"
                    style={{ textDecoration: 'line-through' }}
                >
                    {text}
                </div>
            )}

            <button onClick={() => onToggle(id)}>
                <FaCheck />
            </button>
            <button onClick={() => onRemove(id)}>
                <FaTrash />
            </button>
        </li>
    );
};
export default TodoItem;
