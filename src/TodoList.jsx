import TodoListItem from './TodoListItem';

// Todo list component
const TodoList = (props) => 
    <ul>{props.list.map(function(item){
            return (<TodoListItem key={item.id} item={item} />); 
            })}
    </ul>;





export default TodoList;