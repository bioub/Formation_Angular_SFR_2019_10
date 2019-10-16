import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersComponent } from './users/users.component';
import { SharedModule } from '../shared/shared.module';
import { MatListModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [UsersListComponent, UsersAddComponent, UsersDetailsComponent, UsersComponent],
  imports: [
    SharedModule,
    MatListModule,
    MatButtonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
