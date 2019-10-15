import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() todo: Todo = new Todo();
  @Output() delete = new EventEmitter<Todo>();

  handleClick() {
    this.delete.emit(this.todo);
  }

  ngDoCheck() {
    console.log('detect item');
  }
}
