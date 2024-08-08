import React, { createContext } from "react";

export const TaskContext = createContext();

export default function TaskProvider({ children }) {

  return (
    <TaskContext.Provider>
      {children}
    </TaskContext.Provider>
  );
}
