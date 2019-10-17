import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
  });

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.userForm.valueChanges.subscribe((user) => {
      console.log(user);
    })

    this.userForm.get('email').valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.userForm.setValue({
      name: 'Romain',
      email: 'romain.bohdanowicz@gmail.com',
      phone: '',
    })
  }

  handleSubmit() {
    this.userService.create(this.userForm.value).subscribe((user) => {
      this.router.navigate(['users']);
      this.userService.add.next(user);
    })
  }
}
