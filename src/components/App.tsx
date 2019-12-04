import * as React from 'react';
import {IProps} from '../interface/IProps';
import {IState} from '../interface/IState';
import {TaskForm} from './TaskForm'
import {ITaskForm} from "../interface/ITaskForm";
import {TaskList} from "./TaskList";

export class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    addNewTask(task: ITaskForm) {
        this.setState({
            tasks: [...this.state.tasks, task]
        });
    }

    deleteTask(id: number) {
        const tasks: ITaskForm[] = this.state.tasks.filter((task: ITaskForm) => {
            return task.id !== id
        });
        this.setState({tasks});
        console.log(tasks);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="/">
                        {this.props.title}
                    </a>
                </nav>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-md-4">
                            <TaskForm addNewTask={this.addNewTask.bind(this)}/>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask.bind(this)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}