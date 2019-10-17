import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../user.service";
import { User } from "../user";
import { switchMap, map } from 'rxjs/operators';
import { Observable, ReplaySubject } from 'rxjs';

// @Component({
//   selector: "app-users-details",
//   templateUrl: "./users-details.component.html",
//   styleUrls: ["./users-details.component.scss"],
// })
// export class UsersDetailsComponent implements OnInit {
//   subject$: ReplaySubject<User>;

//   constructor(
//     private activatedRoute: ActivatedRoute,
//     private userService: UserService,
//   ) {}

//   ngOnInit() {
//     // this.activatedRoute.paramMap.subscribe((paramMap) => {
//     //   this.userService.getById(paramMap.get("id")).subscribe((user) => {
//     //     this.user = user;
//     //   });
//     // });
//     this.subject$ = new ReplaySubject(1);

//     const user$ = this.activatedRoute.paramMap.pipe(
//       map((paramMap) => paramMap.get("id")),
//       switchMap((id) => this.userService.getById(id))
//     );

//     user$.subscribe(this.subject$);
//   }
// }

@Component({
  selector: "app-users-details",
  templateUrl: "./users-details.component.html",
  styleUrls: ["./users-details.component.scss"],
})
export class UsersDetailsComponent implements OnInit {
  user$: Observable<User>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
  ) {}

  ngOnInit() {
    // this.activatedRoute.paramMap.subscribe((paramMap) => {
    //   this.userService.getById(paramMap.get("id")).subscribe((user) => {
    //     this.user = user;
    //   });
    // });
    this.user$ = this.activatedRoute.paramMap.pipe(
      map((paramMap) => paramMap.get("id")),
      switchMap((id) => this.userService.getById(id))
    );
  }
}
