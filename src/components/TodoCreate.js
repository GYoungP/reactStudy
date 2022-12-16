import React, { useState } from 'react';
import { FaPlusSquare } from 'react-icons/fa';

const TodoCreate = ({ onCreate }) => {
    const [value, setValue] = useState('');

    const handleChangeState = (e) => {
        setValue(e.target.value);
        console.log(e.target.value);
    };
    const onSubmit = () => {
        onCreate(value);
        setValue('');
        console.log(value.id);
    };

    return (
        <>
            <div className="TodoCreate">
                <div className="inputBox">
                    <input
                        onChange={handleChangeState}
                        value={value}
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
