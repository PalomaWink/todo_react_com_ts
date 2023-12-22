import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'

//CSS
import styles from './TaskForm.module.css'

//Interface
import { ITask } from '../interfaces/Task'

const TaskForm = () => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [difficulty, setDifficulty] = useState<number>(0)

  const addTaskHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'title') {
      setTitle(event.target.value)
    } else {
      setDifficulty(parseInt(event.target.value))
    }
    console.log(title, difficulty);
  }


  return (
    <form 
      className={styles.form}
      onSubmit={addTaskHandler}
    >
      <div className={styles.input_conteiner}>
        <label htmlFor="title">Título:</label>
        <input type="text" name="title" placeholder="Título da tarefa" onChange={handleChange} />
      </div>
      <div className={styles.input_conteiner}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input type="text" name="difficulty" placeholder="Dificuldade da tarefa" onChange={handleChange} />
      </div>
      <button type="submit">Criar tarefa</button>
    </form>
  )
}

export default TaskForm