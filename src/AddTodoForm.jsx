const AddTodoForm = ({onAddTodo})=>{
    function handleAddTodo(event){
        event.preventDefault();
        const form = event.target;
        const todoTitle = form.elements.todoTitle.value;
        onAddTodo(todoTitle);
        console.log(todoTitle);
        form.reset();
    };
    
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title:</label><br></br>
            <input id="todoTitle" name="title" />
            <button type="submit">Add</button>
        </form>
    )
};

export default AddTodoForm;