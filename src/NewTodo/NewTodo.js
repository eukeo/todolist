import { useState } from "react";

const NewTodo = (props) => {
  const [deleteTodo, setDeleteTodo] = useState(false);

  const deleteTodoHandler = () => {
    setDeleteTodo(true);
  };

  return (
    <div>
      {!deleteTodo && (
        <ul>
          {props.text} {props.time}
          <button onClick={deleteTodoHandler}>Remove</button>
        </ul>
      )}
    </div>
  );
};

export default NewTodo;
