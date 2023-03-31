import "./NewDate.css";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const NewDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div
      className="date"
      style={{
        width: "40%",
        display: "block",
        margin: "auto",
      }}
    >
      <Card.Title>Today is {date.toLocaleDateString()}</Card.Title>
      <Card.Title>{date.toLocaleTimeString()}</Card.Title>
    </div>
  );
};

export default NewDate;
