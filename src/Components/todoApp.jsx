import React from 'react';
import Todo from './todo'
import TodoForm from './todoForm'

function TodoApp() {
    const [tasks, setTasks] = React.useState([]);

  const addTask = text => {
    const newTasks = [...tasks, { text }];
    setTasks(newTasks);
  };

  const completeTask = index => {
    const newTasks = [...tasks];
    newTasks[index].isDone = true;
    setTasks(newTasks);
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
    return (
        <div>
        <h1 style={{
            display: 'flex',
            justifyContent: 'center',
            }}>My Todo-List</h1>
            {tasks.map((task, index) => (
            <Todo
                key={index}
                index={index}
                task={task}
                completeTask={completeTask}
                removeTask={removeTask}
            />
            ))}
            <TodoForm addTask={addTask} />
        </div>
    );
}

export default TodoApp;

