import "bootstrap/dist/css/bootstrap.min.css";
import "./TodoList.css";
import NewTodo from "../NewTodo/NewTodo";
import { Card } from "react-bootstrap";

const TodoList = (props) => {
  const allTodos = props.todos;

  return (
    <div style={{ display: "block", margin: "auto" }} className="todoList">
      {allTodos.map((todo, index) => (
        <Card
          className="todoItem"
          key={index}
          style={{
            backgroundColor: "#D3E4F4",
          }}
        >
          <NewTodo text={todo.text} time={todo.time} />
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
