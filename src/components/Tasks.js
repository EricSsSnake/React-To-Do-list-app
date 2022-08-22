import React from "react";
import { FaTimes } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";

const Tasks = (props) => {
  return (
    <div className="card">
      {props.tasks.map((e) => (
        <div
          className={e.done ? "task-container-done" : "task-container"}
          key={e.id}
          onDoubleClick={() => props.toggle(e.id)}>
          <p className="title">
            {e.title}

            <span className="icons">
              <BsCheckCircle
                onClick={() => props.toggle(e.id)}
                style={{ marginRight: ".5rem" }}
              />

              <FaTimes onClick={() => props.delete(e.id)} />
            </span>
          </p>
          <p className="time">{e.time}</p>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
