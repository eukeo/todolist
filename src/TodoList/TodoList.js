import "bootstrap/dist/css/bootstrap.min.css";
import NewTodo from "../NewTodo/NewTodo";
import { Card } from "react-bootstrap";

const TodoList = (props) => {
  const allTodos = props.todos;

  return (
    <div style={{ width: "40%", display: "block", margin: "auto" }}>
      {allTodos.map((todo, index) => (
        <Card
          key={index}
          style={{
            color: "white",
            backgroundColor: "#332940",
          }}
        >
          <NewTodo text={todo.text} time={todo.time} />
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
