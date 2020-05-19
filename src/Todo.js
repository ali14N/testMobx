// import React, { Component } from 'react';
// import { observer } from 'mobx-react'

// @observer
// class TodoListView extends Component {
//     render() {
//         return (
//             <div>
//                 <ul>
//                     {this.props.todoList.todo.map(todo => (
//                         <TodoView todo={todo} key={todo.id} />
//                     ))}
//                 </ul>
//                 Tasks left: {this.props.todoList.unfinishedTodoCount}
//             </div>
//         )
//     }
// }

// const TodoView = observer(({ todo }) => (
//     <li>
//         <input
//             type="checkbox"
//             checked={todo.finished} onClick={() => (todo.finished = !todo.finished)}
//         />
//         {todo.title}
//     </li>
// ))

// const store = new TodoList()