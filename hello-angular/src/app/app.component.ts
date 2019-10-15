import { Component } from "@angular/core";

// Model View ViewModel
// Data Binding

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  prenoms = ['Jean', 'Eric'];
  selectedPrenom = 'Eric';
}
