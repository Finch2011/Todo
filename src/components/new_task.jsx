import React, { useContext, useState , useRef } from "react";
import "./new_task.css";
import { TaskContext } from "../context/TaskContext";
export default function new_task() {
  const {task , setTask} = useContext(TaskContext);
  const {datatask , setDatatask} =useContext(TaskContext);
  const {check , setCheck } =useContext(TaskContext)
  const text = useRef();
  const select = useRef();
  function sub(){
   setTask(false)
   fetch()
   if(text.current.value !== ""){
      setDatatask(text.current.value)
      if(select.current.value === "checkbox"){
        setCheck(false)
      }
      else{
        setCheck(true)
      }
   }
   
  }
  return (
    <div className="pop_up">
      <input ref={text} type="text" placeholder="Task Title..." />
      <select ref={select}>
        <option value="checkbox"> checkbox </option>
        <option value="no-deadline"> unlimited time </option>
      </select>
      <button onClick={sub}>Submit</button>
    </div>
  );
}
