import EditButton from "../UI/EditButton";

const TodoList = (props) => {
  const editTextHandler = () => {
    props.todos();
  };

  return (
    <ul>
      {props.todos.map((todo, index) => (
        <ul key={index}>
          {todo.time} {todo.text}
          <EditButton onEdit={editTextHandler} />
        </ul>
      ))}
    </ul>
  );
};

export default TodoList;
