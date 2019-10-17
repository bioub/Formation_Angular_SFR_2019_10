import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { delay } from "rxjs/operators";

const url = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<User[]>(url);
  }

  getById(id: string | number) {
    return this.httpClient.get<User>(url + '/' + id)
      .pipe(
        delay(id === '3' ? 3000 : 0)
      );
  }

  create(data: User) {
    return this.httpClient.post<User>(url, data);
  }
}
