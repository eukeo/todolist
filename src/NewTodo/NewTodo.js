import "./NewTodo.css";
import { useState, useEffect } from "react";

const NewTodo = (props) => {
  const [deleteTodo, setDeleteTodo] = useState(false);
  const [editTodo, setEditTodo] = useState(false);
  const [editTime, setEditTime] = useState(false);
  const [text, setText] = useState(props.text);
  const [time, setTime] = useState(props.time);
  const [saveButton, setSaveButton] = useState(true);

  useEffect(() => {
    if (text.length > 2 && time.length !== "") {
      setSaveButton(false);
    } else {
      setSaveButton(true);
    }
  }, [text, time]);

  const editTodoHandler = () => {
    setEditTodo(true);
    setEditTime(true);
  };

  const deleteTodoHandler = () => {
    setDeleteTodo(true);
  };

  const saveTodoHandler = () => {
    setEditTodo(false);
    setEditTime(true);
    setText(text);
    setTime(time);
  };

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  const timeChangeHandler = (e) => {
    setTime(e.target.value);
  };

  return (
    <div>
      {!deleteTodo && (
        <ul className="todoText">
          {editTodo && editTime ? (
            <ul>
              <input type="text" value={text} onChange={textChangeHandler} />
              <input type="time" value={time} onChange={timeChangeHandler} />
            </ul>
          ) : (
            <li>
              {text} {time}
              <button className="editBtn" onClick={editTodoHandler}>
                Edit
              </button>
              <button className="deleteBtn" onClick={deleteTodoHandler}>
                Delete
              </button>
            </li>
          )}
          {editTodo && (
            <div>
              <button onClick={saveTodoHandler} disabled={saveButton}>
                Save
              </button>
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

export default NewTodo;
