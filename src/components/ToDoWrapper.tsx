import ToDoForm from "./ToDoForm"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import ToDo from "./ToDo"
import EditToDoForm from "./EditToDoForm"

interface Todo {
  id: string
  task: string
  completed: boolean
  isEditing: boolean
}
const ToDoWrapper = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addToDo = (insertedTask: string) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: insertedTask, completed: false, isEditing: false },
    ])
  }
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const editTodo = (id: String) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    )
  }

  const editTask = (task: string, id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    )
  }
  return (
    <>
      <div className="TodoWrapper">
        <h1>Today's Tasks</h1>
        <ToDoForm addToDo={addToDo} />
        {todos.map((todo, index) =>
          todo.isEditing ? (
            <EditToDoForm editTodo={editTask} task={todo} />
          ) : (
            <ToDo
              key={index}
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
            />
          )
        )}
      </div>
      <span className="footer-txt">Made by/ Moaz gad</span>
    </>
  )
}
export default ToDoWrapper
