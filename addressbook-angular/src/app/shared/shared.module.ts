import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { ClockComponent } from './clock/clock.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';



@NgModule({
  declarations: [SelectComponent, ClockComponent],
  imports: [
    // que des modules
    CommonModule,
    // RouterModule,
  ],
  exports: [
    // components, modules, pipes, directives
    ClockComponent,
    MatButtonModule,
    CommonModule, // export NgIf, NgForOf, DatePipe...
  ]
})
export class SharedModule { }
