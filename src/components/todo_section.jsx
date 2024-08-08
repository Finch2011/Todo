import React from "react";
import "./todo_section.css";
import Tasks from "./tasks";

export default function TodoSection({title , subtitle , color}) {
  return (
    <div className="todo-container" style={{ backgroundColor: color }}>
      <h3>
        {title}<span> | {subtitle}</span>
      </h3>
      <Tasks />
    </div>
  );
}
