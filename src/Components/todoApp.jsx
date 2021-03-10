import React from 'react';
import Todo from './todo'
import TodoForm from './todoForm'

function TodoApp() {
    const [todos, setTodos] = React.useState([]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
    return (
        <div>
        <h1 style={{
            display: 'flex',
            justifyContent: 'center',
            }}>My Todo-List</h1>
            {todos.map((todo, index) => (
            <Todo
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
            />
            ))}
            <TodoForm addTodo={addTodo} />
        </div>
    );
}

export default TodoApp;

