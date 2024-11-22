const AddTodoForm = ()=>{
    return (
        <form>
            <label htmlFor="todoTitle">Title:</label><br></br>
            <input id="todoTitle" />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTodoForm;