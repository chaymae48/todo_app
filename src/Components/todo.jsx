import { Button, Checkbox } from '@material-ui/core';
import React from 'react';
import '../App.css';

function Todo({ todo, index, completeTodo, removeTodo }) {

    return (
        <div className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through": ""}}>
            <div>
            <Checkbox onClick={() => completeTodo(index)}/>
            </div>
        {todo.text}
            <div>
                <Button onClick={() => removeTodo(index)}>X</Button>
            </div>
        </div>
    );
};

export default Todo;