import React, { useContext, useEffect, useState } from "react";
import "./home.css";

import TodoSection from "../components/todo_section";

import NewTask from '../components/new_task';
import { TaskContext } from "../context/TaskContext";
import axios from "axios";

export default function home() {
   const {task , setTask} = useContext(TaskContext)
   const [data , setdata] = useState([])
   useEffect(()=>{
    fetch("https://66ab8e13636a4840d7cb29a3.mockapi.io/todo")
    .then(res => res.json())
    .then(data => setdata(data))
   })
     
  return (
    <>
    {task && <NewTask/>}
    <section className="Tasks-OutPut">
        {data.map((Data) => (
          <div>
            <TodoSection
            key={Data.id}
              title={Data.title}
              subtitle={Data.subtitle}
              color={Data.color}
            />
          </div>
        ))}
      </section>
    </>
  );
}
