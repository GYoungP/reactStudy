import React, { useState } from 'react';

const TodoCreate = () => {
    const [todoCreate, setTodoCreate] = useState('');

    const onSubmit = () => {
        console.log(todoCreate);
    };

    return (
        <>
            <div>
                <input
                    onChange={(e) => {
                        setTodoCreate(e.target.value);
                    }}
                    value={todoCreate}
                    placeholder="todo 추가하기"
                />
                <button onClick={onSubmit}>추가하기</button>
            </div>
            <div>
                <select>
                    <option value="all">all</option>
                    <option value="Uncompleted">Uncompleted</option>
                </select>
            </div>
        </>
    );
};

export default TodoCreate;
