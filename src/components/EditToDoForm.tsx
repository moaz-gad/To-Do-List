import { useState } from "react"
interface Props {
  task: {
    id: string
    task: string
    completed: boolean
    isEditing: boolean
  }
  editTodo: (value: string, id: string) => void
}
const EditToDoForm = ({ task, editTodo }: Props) => {
  const [value, setValue] = useState(task.task)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // prevent default action
    e.preventDefault()
    // edit todo
    editTodo(value, task.id)
  }
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  )
}
export default EditToDoForm
