import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  newTodo = new Todo();

  @Output() add = new EventEmitter<Todo>()

  handleSubmit(event: Event) {
    event.preventDefault();
    this.add.emit({...this.newTodo});
  }
}
