import React, { useContext } from "react";
import "./tasks.css";
import { TaskContext } from "../context/TaskContext";

export default function Tasks({text}) {
  // فانکشن حذف کردن تسک مورد نظر با آیدی
  const {check , setCheck } = useContext(TaskContext)
  return (
    <div className="tasks_container">
      {check ? <>
      <label>{text}</label>
      </> : <>
      <label>{text}</label>
      <input type="checkbox" />
      </>}
      <button>
        <img onClick={()=>{
          setCheck("")
        }} src="/bin.png" alt="delete task" />
      </button>
    </div>
  );
}
