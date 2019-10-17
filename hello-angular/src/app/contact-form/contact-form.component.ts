import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contact = {
    name: 'Romain',
    email: 'romain.bohdanowicz@gmail.com',
    phone: '00000000000',
  }

  constructor() { }

  ngOnInit() {
  }

  add() {
    
  }
}
