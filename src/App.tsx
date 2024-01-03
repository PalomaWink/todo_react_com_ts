import { useState } from 'react'
//Componentes
import Header from './components/Header'
import Footer from './components/Footer'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

//CSS
import styles from './App.module.css'

//Interfaces
import { ITask } from './interfaces/Task'
import Modal from './components/Modal'

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  const deleteTask = (id: number): void => {
    setTaskList(taskList.filter((task: ITask) => task.id !== id))
  }

  const hideOrShowModal = (display: boolean): void => {
    const modal = document.querySelector('#modal')
    if (display) {
      modal!.classList.remove("hide")
    } else {
      modal!.classList.add("hide")
    }
  }

  const editTask = (): void => {
    hideOrShowModal(true)
  }

  return (
    <div>
      <Modal children={<TaskForm taskList={taskList} btnText='Editar tarefa' />} />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que voce vai fazer?</h2>
          <TaskForm taskList={taskList} setTaskList={setTaskList} btnText='Criar tarefa'/>
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} handleDeleteTask={deleteTask} handleEdit={editTask} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
