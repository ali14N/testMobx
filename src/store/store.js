import { observable, computed, action } from 'mobx'

export class TodoList {
    @observable todos = JSON.parse(localStorage.getItem('todos')) || [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
    // @action remainingTodos = () => {
    @computed get remainingTodos() {
        return this.todos.filter(todo => todo = !todo.finished)
    }
}
export class Todo {
    id = Math.random();
    @observable title;
    @observable finished = false
    constructor(title) {
        this.title = title
    }
}