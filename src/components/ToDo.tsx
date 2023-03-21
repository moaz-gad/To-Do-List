import "@fortawesome/fontawesome-free/css/all.css"
interface Props {
  task: {
    id: string
    task: string
    completed: boolean
    isEditing: boolean
  }
  toggleComplete: (id: string) => void
}
const ToDo = ({ task, toggleComplete }: Props) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={task.completed ? "completed" : ""}
      >
        {task.task}
      </p>
      <div>
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash"></i>{" "}
      </div>
    </div>
  )
}
export default ToDo
