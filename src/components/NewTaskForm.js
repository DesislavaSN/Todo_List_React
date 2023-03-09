import { useState } from 'react';

export default function NewTaskForm({ addTask }) {
    const [newInput, setNewInput] = useState('');

    const onChangeHandler = (e) => {
        // console.log(e.target.value);
        setNewInput(e.target.value);
    }

    const onSubmitNewTask = (e) => {
        e.preventDefault();
        addTask(newInput);
        setNewInput('');
    }

    return (
        <form onSubmit={onSubmitNewTask}>
            <input
                type="text"
                name="newTask"
                className="newTask"
                placeholder="Add your task here..."
                value={newInput}
                onChange={onChangeHandler}
            />
            <button className="save-btn">Save</button>
        </form>
    );
};