import { Button, Checkbox } from '@material-ui/core';
import React from 'react';
import '../App.css';

function Todo({ task, index, completeTask, removeTask }) {

    return (
        <div className="todo"
        style={{ textDecoration: task.isDone ? "line-through": ""}}>
            <div>
            <Checkbox onClick={() => completeTask(index)}/>
            </div>
        {task.text}
            <div>
                <Button onClick={() => removeTask(index)}>X</Button>
            </div>
        </div>
    );
};

export default Todo;