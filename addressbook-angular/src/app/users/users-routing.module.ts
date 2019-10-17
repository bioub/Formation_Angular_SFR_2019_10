import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { AuthGuard } from '../core/auth.guard';


const routes: Routes = [{
  path: '',
  component: UsersComponent,
  canActivate: [AuthGuard],
  canActivateChild: [AuthGuard],
  data: {
    title: 'Users - AddressBook',
  },
  children: [{
    path: 'add', // /users/add
    component: UsersAddComponent,
    data: {
      title: 'Users Add - AddressBook',
    },
  }, {
    path: ':id', // /users/123
    component: UsersDetailsComponent,
    data: {
      title: 'Users Details - AddressBook',
    },
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
