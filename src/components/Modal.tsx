//CSS
import style from './Modal.module.css';

// Interface
import { PropsModal } from '../interfaces/Task';

export default function Modal({ children }: PropsModal) {
  const closeModal = (): void => {
    const modal = document.querySelector('#modal')
    modal!.classList.add("hide")
  }

  return (
    <div id='modal' className='hide'>
      <div className={style.fade} onClick={closeModal}></div>
      <div className={style.modal}>
        <h2>Editar tarefa</h2>
        {children}
      </div>
    </div>
  )
}