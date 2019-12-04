import {ITaskForm} from "./ITaskForm";

export interface ITaskList {
    tasks: ITaskForm[],
    deleteTask: (id: number) => void
}