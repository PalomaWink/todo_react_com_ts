export interface ITask {
  id: number,
  title: string,
  difficulty: number,
}

// a tipagen desse setTaskList é um dispatch do React, onde eu disparo um atualização de estado (setState) e essa atualização
// esta trabalhando com um array de tarefas (ITask[])
export interface PropsTaskForm {
  taskList: ITask[],
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

export interface PropsTaskList {
  taskList: ITask[],
}