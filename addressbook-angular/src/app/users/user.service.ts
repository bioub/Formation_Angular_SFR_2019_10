import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  add = new ReplaySubject<User>(3);

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<User[]>('/users');
  }

  getById(id: string | number) {
    return this.httpClient.get<User>('/users/' + id)
      // .pipe(
      //   delay(id === '3' ? 3000 : 0)
      // );
  }

  create(data: User) {
    return this.httpClient.post<User>('/users', data);
  }
}
