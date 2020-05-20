import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
class Todo {
  id = Math.random();
  @observable title;
  @observable finished = false
  constructor(title) {
    this.title = title
  }
}

class TodoList {
  @observable todos = [];
  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}

@observer
class TodoListView extends Component {
  render() {
    return <div>
      <ul>
        {this.props.todoList.todos.map(todo =>
          <TodoView todo={todo} key={todo.id} />
        )}
      </ul>
      Tasks left: {this.props.todoList.unfinishedTodoCount}
      <TodoAdd todoList={store} />
      <DevTools />
    </div>
  }
}

const TodoView = observer(({ todo }) =>
  <li>
    <input type='checkbox'
      checked={todo.finished}
      onChange={() => todo.finished = !todo.finished}
    />
    {todo.title}
  </li>
)

@observer
class TodoAdd extends Component {
  state = {
    inputText: ""
  }
  render() {
    const inputHandler = (e) => {
      const inputText = e.target.value
      this.setState({ inputText })
    }
    const submitHandler = (e) => {
      e.preventDefault();
      console.log(this.state.inputText)
      this.props.todoList.todos.push(new Todo(this.state.inputText))
      console.log(this.props.todoList.todos)
    }
    return (
      <form onSubmit={submitHandler}>
        <input type="text"
          onChange={inputHandler}
        />
        <button type="submit">Add</button>
      </form>
    )
  }
}

const store = new TodoList()

ReactDOM.render(<TodoListView todoList={store} />, document.getElementById('root'))

store.todos.push(
  new Todo("understand how counter works in mobx"),
  new Todo("add items to Todo List"),
);
store.todos[0].finished = true;
