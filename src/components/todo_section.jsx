import React, { useContext } from "react";
import "./todo_section.css";
import Tasks from "./tasks";
import { TaskContext } from "../context/TaskContext";

export default function TodoSection({title , subtitle , color}) {
  const {datatask , setDatatask } =useContext(TaskContext)
  return (
    <div className="todo-container" style={{ backgroundColor: color }}>
      <h3>
        {title}<span> | {subtitle}</span>
      </h3>
      <Tasks 
      text={datatask}
      />
    </div>
  );
}
