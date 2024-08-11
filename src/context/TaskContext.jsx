import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export default function TaskProvider({ children }) {
  const [task , setTask] = useState(false)
  const [datatask , setDatatask] =useState("")
  const [check , setCheck ] =useState(false)
  return (
    <TaskContext.Provider value={{task , setTask , datatask , setDatatask , check ,setCheck}}>
      {children}
    </TaskContext.Provider>
  );
}
