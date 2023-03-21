import React from "react"
import ReactDOM from "react-dom/client"
import ToDoWrapper from "./components/ToDoWrapper"
import "./main.css"
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToDoWrapper />
  </React.StrictMode>
)
