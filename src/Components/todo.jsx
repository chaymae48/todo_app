import React from 'react';
import '../App.css';

function Todo({ todo, index, completeTodo, removeTodo }) {

    return (
        <div className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through": ""}}>
            <div>
                <button onClick={() => removeTodo(index)}>X</button>
            </div>
        {todo.text}
        <div>
            <button onClick={() => completeTodo(index)}>Done</button>
        </div>
        </div>
    );
};

export default Todo;