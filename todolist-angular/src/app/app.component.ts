import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [{
    id: 123,
    title: 'Pain',
    completed: false,
  }, {
    id: 456,
    title: 'Lait',
    completed: true,
  }, {
    id: 789,
    title: 'Beurre',
    completed: false,
  }];

  handleAdd(todo) {
    // ajout au début muable
    // this.todos.unshift(todo);

    // ajout au début immuable
    this.todos = [todo, ...this.todos];
  }

  handleDelete(todo) {
    // suppression muable
    // const i = this.todos.indexOf(todo);
    // this.todos.splice(i, 1);

    // suppression immuable
    this.todos = this.todos.filter((t) => t !== todo);
  }
}
