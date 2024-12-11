import React, { useState } from 'react';
import './App.css'
import TodoList from './TodoList'
import AddTodoForm  from './AddTodoForm'; 

const App = () => {

  const stories = [
    {
    id:1,
    title:"Walk Dogs"
    },
    {
    id:2,
    title:"Clean Room"
    },
    {
    id:3,
    title:"Take Trash Out"
    },
];

  const [newTodo,setNewTodo] = useState('');

  return (
  <div className="App">
    <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
      <TodoList list={stories} />
  </div>
  );
};


export default App
