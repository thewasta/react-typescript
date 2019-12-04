import {ITaskForm} from "./ITaskForm";

export interface ITaskFormProps {
    addNewTask: (task: ITaskForm) => void
}