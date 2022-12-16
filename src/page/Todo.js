import { getValue } from '@testing-library/user-event/dist/utils';
import React, { useCallback, useRef, useState } from 'react';
import TodoCreate from '../components/TodoCreate';
import TodoList from '../components/TodoList';

const Todo = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '알고리즘 공부',
            checked: true,
        },
        {
            id: 2,
            text: '코딩테스트 공부',
            checked: false,
        },
        {
            id: 3,
            text: '리액트 공부',
            checked: true,
        },
    ]);

    const todoId = useRef(4);

    const onCreate = (text) => {
        const newTodos = {
            id: todoId.current,
            text,
            checked: true,
        };
        todoId.current += 1;
        setTodos([newTodos, ...todos]);
    };

    const onToggle = (id) => {
        console.log(todos);
        setTodos(
            todos.map((it) =>
                it.id === id ? { ...it, checked: !it.checked } : it
            )
        );
    };

    const onRemove = (id) => {
        console.log(id);
        setTodos(todos.filter((it) => it.id !== id));
    };

    return (
        <div className="Todo">
            <h1>To-Do List</h1>
            <TodoCreate onCreate={onCreate} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </div>
    );
};

export default Todo;
