import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() items: string[] = [];
  @Input() selection = '';
  @Output() selectionChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClickItem(item: string) {
    this.selectionChange.emit(item);
  }
}
