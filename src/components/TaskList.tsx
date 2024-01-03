// interfaces
import { PropsTaskList } from "../interfaces/Task"

// CSS
import styles from './TaskList.module.css'

const TaskList = ( {taskList, handleDeleteTask}: PropsTaskList) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i className="bi bi-pencil-square"></i>
              <i className="bi bi-trash3" onClick={() => handleDeleteTask(task.id)}></i>
            </div>
          </div>
        ))
      ): (
        <p>Não há tarefas cadastradas!</p>
      )}
    </>
  )
}

export default TaskList