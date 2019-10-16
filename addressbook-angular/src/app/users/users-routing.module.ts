import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersAddComponent } from './users-add/users-add.component';


const routes: Routes = [{
  path: 'users',
  component: UsersComponent,
  children: [{
    path: 'add', // /users/add
    component: UsersAddComponent,
  }, {
    path: ':id', // /users/123
    component: UsersDetailsComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
