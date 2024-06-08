import React, { useState } from 'react'
import InputComponent from '../input';

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            addTodo(value);
            setValue('');
        }
    };
    const handleChange = (newValue) => {
        setValue(newValue);
      };
      
    return (
        <form onSubmit={handleSubmit}
            className="TodoForm">
            <InputComponent
                type="text"
                value={value}
                onChange={handleChange} // Pass the handleChange function from the parent component
                className="todo-input"
                placeholder='What is the task today?'
            />

            <button type="submit" className='todo-btn'>Add Task</button>
        </form>
    )
}