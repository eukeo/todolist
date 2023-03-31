import "./ListForm.css";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

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
    <Card
      style={{
        color: "Black",
        backgroundColor: "#FFFFFF",
        width: "40%",
        display: "block",
        margin: "auto",
      }}
    >
      <form type="submit" onSubmit={submitTodo}>
        <Card.Title className="title">What Do I Need To Do?</Card.Title>
        <div className="inputFields">
          <input
            className="textInput"
            type="text"
            value={enteredText}
            onChange={enteredTextHandler}
            placeholder="What's next?"
          ></input>
          <input
            className="timeInput"
            type="time"
            value={enteredTime}
            onChange={enteredTimeHandler}
          ></input>
          <button className="confirmBtn" disabled={buttonDisabled}>
            Confirm
          </button>
        </div>
      </form>
    </Card>
  );
};

export default ListForm;
