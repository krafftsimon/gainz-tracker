import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Day } from './day';
import { DAYS } from './day-list'
import { Exercise } from './exercise'

const dURL: string = 'localhost';
const pURL: string = '35.193.240.128';

@Injectable()
export class DayService {
  days: Day[] = [];
  constructor(private http: HttpClient) {}

  addNewDay() {
    let exercise = new Exercise('exampleExercise', 2, 10, 185);
    this.days.unshift(new Day(new Date(), exercise));
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    return this.http.post('http://' + pURL + ':3000/api/users/days' + token, {headers: headers})
      //.map((response: Response) => response.json())
      .catch(error => Observable.throw(error));
  }

  deleteDay(index: number) {
    this.days.splice(index, 1);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    return this.http.patch('http://' + pURL + ':3000/api/users/days' + token, {"index": index}, {headers: headers})
      //.map((response: Response) => response.json())
      .catch(error => Observable.throw(error));
  }

  getDays() {
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    return this.http.get('http://' + pURL + ':3000/api/users/days' + token)
      .map(data => {
        const days = data['obj'];
        this.days = days;
        return days;
      })
      .catch(error => Observable.throw(error));
  }

  addExercise(index: number, exerciseName: string, sets: number, reps: number, weight: number) {
    this.days[index].exercises.push(new Exercise(exerciseName, sets, reps, weight));
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    return this.http.post('http://' + pURL + ':3000/api/users/days/exercises' + token, {"index": index, "exerciseName": exerciseName, "sets": sets, "reps": reps, "weight": weight}, {headers: headers})
      //.map((response: Response) => response.json())
      .catch(error => Observable.throw(error));
  }

  deleteExercise(dayIndex: number, exerciseIndex: number) {
    this.days[dayIndex].exercises.splice(exerciseIndex, 1);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    return this.http.patch('http://' + pURL + ':3000/api/users/days/exercises' + token, {"dayIndex": dayIndex, "exerciseIndex": exerciseIndex}, {headers: headers})
      //.map((response: Response) => response.json())
      .catch(error => Observable.throw(error));
  }
}
