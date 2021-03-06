import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { User } from './../models/user';

const dURL: string = 'localhost';
const pURL: string = '35.193.240.128';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(user: User) {
    const body = JSON.stringify(user);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`http://${pURL}:3000/api/users/register`, body, {headers: headers})
      //.map((response: Response) => response.json())
      .catch(error => Observable.throw(error));
  }

  login(user: User) {
    const body = JSON.stringify(user);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`http://${pURL}:3000/api/users/login`, body, {headers: headers})
      //.map((response: Response) => response.json())
      .catch(error => Observable.throw(error));
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  isUsernameUnique(username: string) {
    const body = JSON.stringify({username: username});
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`http://${pURL}:3000/api/users/isUsernameUnique`, body, {headers: headers})
      //.map((response: Response) => response.json())
      .catch(error => Observable.throw(error));
  }

  isEmailUnique(email: string) {
    const body = JSON.stringify({email: email});
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`http://${pURL}:3000/api/users/isEmailUnique`, body, {headers: headers})
      //.map((response: Response) => response.json())
      .catch(error => Observable.throw(error));
  }

  getCurrentUser() {
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    return this.http.get(`http://${pURL}:3000/api/users/currentUser${token}`)
    .catch(error => Observable.throw(error));
  }
}
