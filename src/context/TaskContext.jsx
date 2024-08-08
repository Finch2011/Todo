import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export default function TaskProvider({ children }) {
  const [task , setTask] = useState(false)
  return (
    <TaskContext.Provider value={{task , setTask}}>
      {children}
    </TaskContext.Provider>
  );
}
