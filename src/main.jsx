import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";

import Home from "./pages/home.jsx";
import NavigationBar from "./components/navigaion_bar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
    <NavigationBar />
  </React.StrictMode>
);
