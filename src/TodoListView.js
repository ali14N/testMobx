import React, { Component } from 'react';
import { observer } from 'mobx-react'
const TodoView = observer(({ todo }) => {
    return (
        <p style={{
            textDecoration: todo.finished ? "line-through" : "none"
        }}>
            <input type='checkbox'
                checked={todo.finished}
                onChange={() => todo.finished = !todo.finished}
            />
            {todo.title}
        </p >
    )
})
@observer
class TodoListView extends Component {
    render() {
        const { todos, unfinishedTodoCount } = this.props.todoList // destructuring
        return <div>
            {todos.map(todo =>
                <TodoView todo={todo} key={todo.id} />
            )}
      Tasks left: {unfinishedTodoCount}
        </div>
    }
}
export default TodoListView