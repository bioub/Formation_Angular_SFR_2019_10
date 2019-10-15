import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {

  @Input() todos: Todo[] = [];
  @Output() delete = new EventEmitter<Todo>();

  handleDelete(todo) {
    this.delete.emit(todo);
  }
}
