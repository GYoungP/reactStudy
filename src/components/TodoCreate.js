import React, { useState } from 'react';
import { FaPlusSquare } from 'react-icons/fa';

const TodoCreate = () => {
    const [todoCreate, setTodoCreate] = useState('');

    const onSubmit = () => {
        console.log(todoCreate);
    };

    return (
        <>
            <div className="TodoCreate">
                <div className="inputBox">
                    <input
                        onChange={(e) => {
                            setTodoCreate(e.target.value);
                        }}
                        value={todoCreate}
                        placeholder="todo 추가하기"
                    />
                    <FaPlusSquare onClick={onSubmit} className="plusBtn" />
                </div>

                <select>
                    <option value="all">all</option>
                    <option value="Uncompleted">Uncompleted</option>
                </select>
            </div>
        </>
    );
};

export default TodoCreate;
