import { useState, useEffect } from "react";

const ListForm = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const [enteredTime, setEnteredTime] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (enteredText.length <= 2 || enteredTime === "") {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [enteredText, enteredTime]);

  const submitTodo = (e) => {
    e.preventDefault();
    props.onAddTodo(enteredText, enteredTime);
    setEnteredText("");
    setEnteredTime("");
  };

  const enteredTextHandler = (e) => {
    setEnteredText(e.target.value);
  };

  const enteredTimeHandler = (e) => {
    setEnteredTime(e.target.value);
  };

  return (
    <div>
      <form type="submit" onSubmit={submitTodo}>
        <label>What Do I Need To Do?</label>
        <input
          type="text"
          value={enteredText}
          onChange={enteredTextHandler}
        ></input>
        <label>Time</label>
        <input
          type="time"
          value={enteredTime}
          onChange={enteredTimeHandler}
        ></input>
        <button disabled={buttonDisabled}>Confirm</button>
      </form>
    </div>
  );
};

export default ListForm;
