const TodoListItem = (props) => {
    return (
        <li> 
            <span>{props.item.title}</span>
        </li>
    )
}

export default TodoListItem