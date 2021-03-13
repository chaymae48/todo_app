import React from 'react';

function TodoForm({ addTask }) {
    const [value, setValue] = React.useState("Add new task");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("Add new task");
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            className="input"
            value={value}
            onChange={e => setValue(e.target.value)}
            onFocus={e => setValue("")}
        />
        </form>
    );
}

export default TodoForm;