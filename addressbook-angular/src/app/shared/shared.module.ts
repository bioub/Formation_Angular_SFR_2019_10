import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { ClockComponent } from './clock/clock.component';



@NgModule({
  declarations: [SelectComponent, ClockComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ClockComponent,
  ]
})
export class SharedModule { }
