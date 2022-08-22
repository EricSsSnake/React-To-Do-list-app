import React, { useState } from "react";

const Addtask = (props) => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Please enter a task!");
      return;
    } else if (!time) {
      alert("please specify a time!");
      return;
    }

    setTitle("");
    setTime("");

    props.add({ title, time });
  };

  return (
    <form>
      <div>
        <label htmlFor="task">Add Task:</label>
        <br />
        <input
          type="text"
          id="task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="time">Add Time:</label>
        <br />
        <input
          type="text"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div>
        <button onClick={submitForm} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Addtask;
