import ToDoForm from "./ToDoForm"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import ToDo from "./ToDo"

interface Todo {
  id: string
  task: string
  completed: boolean
  isEditing: boolean
}
const ToDoWrapper = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addToDo = (todo: string) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ])
    console.log(todos[0].task)
  }
  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }
  return (
    <div className="TodoWrapper">
      <ToDoForm addToDo={addToDo} />
      {todos.map((todo, index) => (
        <ToDo task={todo} key={index} toggleComplete={toggleComplete} />
      ))}
    </div>
  )
}
export default ToDoWrapper
