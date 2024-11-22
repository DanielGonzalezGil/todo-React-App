// Actual list
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

// Todo list component
const TodoList = () => <ul>{renderList}</ul>;

/* making the list */
const renderList = todoList.map((listItem) => {
    return <li key={listItem.id}>{listItem.title}</li>;
});

export default TodoList;