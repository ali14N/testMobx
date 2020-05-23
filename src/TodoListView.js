import React, { Component } from 'react';
import { observer } from 'mobx-react'
const TodoView = observer(({ todo }) => {
    return (
        <p style={{
            textDecoration: todo.finished ? "line-through" : "none"
        }}>
            <input type='checkbox'
                checked={todo.finished}
                onChange={() => {
                    todo.finished = !todo.finished
                }}
            />
            {todo.title}
        </p>
    )
})
@observer
class TodoListView extends Component {
    render() {
        const { todos, unfinishedTodoCount, remainingTodos } = this.props.todoList // destructuring
        localStorage.setItem('todos', JSON.stringify(todos))
        return <div>
            {todos.map(todo =>
                <TodoView todo={todo} key={todo.id} />
            )}
      Tasks left: {unfinishedTodoCount}
            <button onClick={() =>
                localStorage.setItem('todos', JSON.stringify(remainingTodos))}
                style={{ marginLeft: "20px" }}>Delete</button>
        </div >
    }
}
export default TodoListView