import React from "react";
import "./navigation_bar.css";

export default function navigaion_bar() {

  return (
    <nav>
      <div className="todos">
        <button>
          <img src="/todo.png" alt="toggle todo lists" />
        </button>
      </div>
      <div className="add">
        <button>
          <img src="/add.png" alt="add to the list" />
        </button>
      </div>
      <div className="share">
        <button>
          <img src="/share.png" alt="share with friends" />
        </button>
      </div>
    </nav>
  );
}
