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
    const onCreate = (id, text, checked) => {
        const newTodos = {
            id: todoId.current,
            text: '',
            checked,
        };
        todoId.current += 1;
        setTodos([newTodos, ...todos]);
    };

    const onToggle = useCallback(
        (id) => {
            setTodos(
                todos.map((todo) =>
                    todo.id === id ? { ...todo, checked: !todo.checked } : todo
                )
            );
        },
        [todos]
    );
    const onRemove = useCallback(
        (id) => {
            setTodos(todos.filter((todo) => todo.id !== id));
        },
        [todos]
    );

    return (
        <div className="Todo">
            <h1>To-Do List</h1>
            <TodoCreate onCreate={onCreate} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </div>
    );
};

export default Todo;
