import { Component, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class SelectComponent {

  open = false;

  @Input() items: string[] = [];
  @Input() selection = '';
  @Output() selectionChange = new EventEmitter<string>();

  constructor(private host: ElementRef) {
   
  }

  @HostListener('click', ['$event'])
  onClickHost(event: MouseEvent) {
    // event.stopPropagation();
    // console.log('click select');
  }

  @HostListener('document:click', ['$event'])
  onClickDocument(event: MouseEvent) {
    if (!this.host.nativeElement.contains(event.target)) {
      this.open = false;
    }
  }
  
  onClickItem(item: string) {
    this.open = false;
    this.selectionChange.emit(item);
  }
}
