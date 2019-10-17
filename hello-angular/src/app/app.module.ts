import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CounterComponent } from './counter/counter.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SelectComponent } from './select/select.component';
import { ClockComponent } from './clock/clock.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    ContactFormComponent,
    SelectComponent,
    ClockComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
