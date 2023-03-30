import NewTodo from "../NewTodo/NewTodo";
import { Card } from "react-bootstrap";

const TodoList = (props) => {
  const allTodos = props.todos;

  return (
    <Card>
      {allTodos.map((todo, index) => (
        <ul key={index}>
          <NewTodo text={todo.text} time={todo.time} />
        </ul>
      ))}
    </Card>
  );
};

export default TodoList;
