import { useState, ChangeEvent, FormEvent, useEffect } from 'react'

//CSS
import styles from './TaskForm.module.css'

//Interface
import { ITask, PropsTaskForm } from '../interfaces/Task'

const TaskForm = ({ taskList, setTaskList, btnText, task, handleUpdateTask }: PropsTaskForm) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [difficulty, setDifficulty] = useState<number>(0)

  useEffect(() => {
    if (task) {
      setId(task.id)
      setTitle(task.title)
      setDifficulty(task.difficulty)
    }
  }, [task])

  const addTaskHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (handleUpdateTask) {
      handleUpdateTask({id, title, difficulty})
    } else {
      const id = Math.floor(Math.random() * 1000)

      const newTask: ITask = {id, title, difficulty}

      // Com a exclamacao eu garanto para o TS que a informacao vai vim
      setTaskList!([...taskList, newTask])
      setTitle('')
      setDifficulty(0)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'title') {
      setTitle(event.target.value)
    } else {
      setDifficulty(parseInt(event.target.value))
    }
  }


  return (
    <form 
      className={styles.form}
      onSubmit={addTaskHandler}
    >
      <div className={styles.input_conteiner}>
        <label htmlFor="title">Título:</label>
        <input type="text" name="title" placeholder="Título da tarefa" onChange={handleChange} value={title}/>
      </div>
      <div className={styles.input_conteiner}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input type="text" name="difficulty" placeholder="Dificuldade da tarefa" onChange={handleChange} value={difficulty} />
      </div>
      <button type="submit">{btnText}</button>
    </form>
  )
}

export default TaskForm