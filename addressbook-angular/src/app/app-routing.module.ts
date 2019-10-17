import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
}, {
  path: 'users',
  loadChildren: () => import('./users/users.module').then((module) => module.UsersModule)
},{
  path: '**',
  component: NotFoundComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
