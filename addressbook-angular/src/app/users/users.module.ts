import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersComponent } from './users/users.component';
import { SharedModule } from '../shared/shared.module';
import { MatListModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// export function userServiceFactory(httpClient: HttpClient) {
//   return new UserService(httpClient, '/users');
// }

@NgModule({
  declarations: [UsersListComponent, UsersAddComponent, UsersDetailsComponent, UsersComponent],
  providers: [
    // UserService
    // équivalent à
    // {
    //   provide: UserService,
    //   useClass: UserService, // new UserService(), new UserService(httpClient)
    // }
    // {
    //   provide: UserService,
    //   useFactory: userServiceFactory
    // }
    // {
    //   provide: UserService,
    //   useValue: {
    //     findAll() {
    //     }
    //   }
    // }
    // {
    //   provide: UserService,
    //   useExisting: UserTestingService,
    // }
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    MatListModule,
    // MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
