import React from 'react';

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

            <button onClick={() => onToggle(id)}>체크하기</button>
            <button onClick={() => onRemove(id)}>삭제하기</button>
        </li>
    );
};
export default TodoItem;
