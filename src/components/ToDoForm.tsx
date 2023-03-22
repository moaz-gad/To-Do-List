import { useState } from "react"
interface Props {
  addToDo: (x: string) => void
}

const ToDoForm = ({ addToDo }: Props) => {
  const [value, setValue] = useState("")
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    addToDo(value)

    setValue("") //To reset the value
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="What's Your Tasks Today?"
        className="todo-input"
        value={value}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  )
}
export default ToDoForm
