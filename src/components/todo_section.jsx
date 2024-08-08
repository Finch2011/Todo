import React from "react";
import "./todo_section.css";
import Tasks from "./tasks";

export default function TodoSection() {
  return (
    <div className="todo-container" style={{ backgroundColor: "red" }}>
      <h3>
        عنوان اول <span>| عنوان دوم</span>
      </h3>
      <Tasks />
    </div>
  );
}
