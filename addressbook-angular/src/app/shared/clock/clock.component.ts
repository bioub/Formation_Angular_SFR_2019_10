import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { clock } from './clock-observable';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  now$: Observable<Date>;
  @Input() delay = 1000;

  ngOnInit() {
    this.now$ = clock(this.delay);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.delay.previousValue !== this.delay) {
      this.now$ = clock(this.delay);
    }
  }

}
