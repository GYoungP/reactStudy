import React, { useState } from 'react';
import { FaPlusSquare } from 'react-icons/fa';

const TodoCreate = ({ onCreate }) => {
    const [value, setValue] = useState('');

    const onSubmit = (e) => {
        onCreate(value);
        setValue('');
        console.log(value);
    };

    return (
        <>
            <div className="TodoCreate">
                <div className="inputBox">
                    <input
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
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
