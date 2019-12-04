import * as React from "react";
import {ITaskList} from "../interface/ITaskList";
import {ITaskForm} from "../interface/ITaskForm";

export class TaskList extends React.Component<ITaskList, any> {
    render(): JSX.Element[] {
        return this.props.tasks.map((task: ITaskForm) => {
            return (
                <div className="col-md-4 mt-2" key={task.id}>
                    <div className="card card-body">
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <button
                            onClick={() => this.props.deleteTask(task.id)}
                            className="btn btn-danger">
                            DELETE
                        </button>
                    </div>
                </div>
            )
        });
    }
}

