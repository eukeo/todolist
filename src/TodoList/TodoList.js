import NewTodo from "../NewTodo/NewTodo";

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo, index) => (
        <ul key={index}>
          <NewTodo text={todo.text} time={todo.time} />
        </ul>
      ))}
    </ul>
  );
};

export default TodoList;
