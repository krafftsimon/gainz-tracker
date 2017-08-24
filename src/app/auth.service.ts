import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { User } from './user';

const dURL: string = 'localhost';
const pURL: string = '35.193.240.128';

@Injectable()
export class AuthService {
  constructor(private http: Http) {}

  register(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://' + pURL + ':3000/api/users/register', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  login(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://' + pURL + ':3000/api/users/login', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  isUsernameUnique(username: string) {
    const body = JSON.stringify({username: username});
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://' + pURL + ':3000/api/users/isUsernameUnique', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  isEmailUnique(email: string) {
    const body = JSON.stringify({email: email});
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://' + pURL + ':3000/api/users/isEmailUnique', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
