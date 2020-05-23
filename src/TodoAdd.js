import React, { Component } from 'react';
import { observer } from 'mobx-react'
import { Todo } from './store/store'
@observer
class TodoAdd extends Component {
    state = {
        inputText: ""
    }
    render() {
        const { todos } = this.props
        const inputHandler = (e) => {
            const inputText = e.target.value
            this.setState({ inputText })
        }
        const submitHandler = (e) => {
            e.preventDefault();
            const { inputText } = this.state
            if (inputText === '') {
                alert("enter some task")
                return;
            }
            const newTodo = new Todo(inputText)
            todos.push(newTodo) // pushing to todo state
            localStorage.setItem("todos", JSON.stringify(todos)) // pushed to localStorage
            // inputText reset
            this.setState({ inputText: "" })
        }
        return (
            <div>
                <form onSubmit={submitHandler}>
                    <input type="text"
                        onChange={inputHandler}
                        value={this.state.inputText}
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}
export default TodoAdd