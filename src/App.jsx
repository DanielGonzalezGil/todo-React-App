import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const todoList = [
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

/* rendering the list */
const renderList = todoList.map(function(listItem){
  return <li>{listItem.id}: {listItem.title}</li>
});

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
        <ul>{renderList}</ul>

    </div>
  );
}

export default App
