import { useState, useEffect } from "react";

const NewDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  console.log();

  return (
    <div>
      <p>{date.toLocaleDateString()}</p>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
};

export default NewDate;
