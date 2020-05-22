import React from 'react';
import TodoListView from './TodoListView';
import TodoAdd from './TodoAdd'
import DevTools from 'mobx-react-devtools'
import { TodoList } from './store/store';
import './App.css'
function App() {
  const store = new TodoList()
  return (
    <div className="App">
      <TodoListView todoList={store} />
      <TodoAdd todos={store.todos} />
      <DevTools />
    </div >
  );
}
export default App;
