import React from 'react';
import './App.css';
import TodoApp from './Components/todoApp';



function App() {
  
  return (
    <div className="app" style={{
      display: 'flex',
      justifyContent: 'center',
  }}>
      
      <TodoApp/>
    </div>
  );
}

export default App;
