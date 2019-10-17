import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import { SharedModule } from './shared/shared.module';
// import { UsersModule } from './users/users.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiBaseUrlInterceptor } from './core/api-base-url.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    // UsersModule,
    AppRoutingModule, // toujours en dernier si route **
    MatToolbarModule,
    // MatButtonModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiBaseUrlInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
