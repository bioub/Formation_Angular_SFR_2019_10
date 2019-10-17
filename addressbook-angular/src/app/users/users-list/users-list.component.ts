import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { User } from "../user";
import { Observable, Subject, combineLatest } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"],
  // providers: [
  //   {
  //     provide: UserService,
  //     useValue: {

  //     }
  //   }
  // ]
})
export class UsersListComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    // ------------------({})----------------->
    // -------[]------------------------------>


    // this.users$ = this.userService.getAll();

    // [[{}, {}], undefined]
    //

    this.users$ = combineLatest(
      this.userService.getAll(),
      this.userService.add.pipe(
        startWith([])
      )
    ).pipe(
      map((arrayOfArray) => arrayOfArray.flat())
    );
  }
}
