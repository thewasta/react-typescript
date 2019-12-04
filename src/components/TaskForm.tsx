import * as React from 'react';
import {ITaskFormProps} from "../interface/ITaskFormProps";
import {ITaskForm} from "../interface/ITaskForm";
import {ITaskFormState} from "../interface/ITaskFormState";

export class TaskForm extends React.Component<ITaskFormProps, ITaskFormState> {
    constructor(props: ITaskFormProps) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }

    getCurrentTime(): number {
        const date: Date = new Date();
        return date.getTime();
    }

    onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newTask: ITaskForm = {
            id: this.getCurrentTime(),
            description: this.state.description,
            title: this.state.title,
            state: false
        };
        this.props.addNewTask(newTask);
        this.setState({
            title: '',
            description: ''
        })
    }

    onChangeHandler(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {value, name} = e.target;
        if ("title" === name) {
            this.setState({
                title: value
            })
        } else {
            this.setState({
                description: value
            })
        }
    }

    render() {
        return (
            <div className="card card-body">
                <form onSubmit={e => this.onSubmitHandler(e)}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            name="title"
                            onChange={e => this.onChangeHandler(e)}
                            type="text"
                            value={this.state.title}
                            placeholder="Task Title"
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="description"
                            onChange={e => this.onChangeHandler(e)}
                            className="form-control"
                            value={this.state.description}
                            placeholder="Descripción">
                    </textarea>
                    </div>
                    <button type={"submit"} className="btn btn-primary btn-block">Save</button>
                </form>
            </div>
        )
    }
}