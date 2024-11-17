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
  // needed to add key={} so react can keep track of each list item
  return <li key={listItem.id}>{listItem.title}</li> 
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
