import "@fortawesome/fontawesome-free/css/all.css"
interface Props {
  task: {
    id: string
    task: string
    completed: boolean
    isEditing: boolean
  }
  toggleComplete: (id: string) => void
  editTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

const ToDo = ({ task, toggleComplete, deleteTodo, editTodo }: Props) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={task.completed ? "completed" : ""}
      >
        {task.task}
      </p>
      <div>
        <i
          className="fa-solid fa-pen-to-square"
          onClick={() => editTodo(task.id)}
        ></i>
        <i
          className="fa-solid fa-trash"
          onClick={() => deleteTodo(task.id)}
        ></i>
      </div>
    </div>
  )
}

export default ToDo
