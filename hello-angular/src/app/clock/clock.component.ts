import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy, OnChanges {
  

  now = new Date();
  @Input() delay = 1000;


  private intervalId;

  constructor() { }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.now = new Date();
    }, this.delay);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.delay.currentValue !== this.delay) {
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => {
        this.now = new Date();
      }, this.delay);
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
