import React from "react";

import "./new_task.css";

export default function new_task() {
  return (
    <div className="pop_up">
      <input type="text" placeholder="Task Title..." />
      <select>
        <option value="checkbox"> checkbox </option>
        <option value="no-deadline"> unlimited time </option>
      </select>
      <button>Submit</button>
    </div>
  );
}
