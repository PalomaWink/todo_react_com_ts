import React from "react"

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
  btnText: string,
  task?: ITask | null,
  handleUpdateTask?({id, title, difficulty}: ITask): void,
}

export interface PropsTaskList {
  taskList: ITask[],
  handleDeleteTask: (id: number) => void
  handleEdit: (task: ITask) => void,
}

// tipar como ReactNode é basicamente dizer que vou utilizar TSX no children
export type PropsModal = {
  children: React.ReactNode,
}