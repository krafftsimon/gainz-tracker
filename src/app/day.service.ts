import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Day } from './day';
import { DAYS } from './day-list'
import { Exercise } from './exercise'

@Injectable()
export class DayService {
  days: Day[] = [];
  constructor(private http: Http) {}

  addNewDay() {
    let exercise = new Exercise('exampleExercise', 2, 10, 185);
    this.days.unshift(new Day(new Date(), exercise));
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    return this.http.post('http://localhost:3000/api/users/days' + token, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  deleteDay(index: number) {
    this.days.splice(index, 1);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    return this.http.patch('http://localhost:3000/api/users/days' + token, {"index": index}, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getDays() {
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    return this.http.get('http://localhost:3000/api/users/days' + token)
      .map((response: Response) => {
        const days = response.json().obj;
        this.days = days;
        return days;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  addExercise(index: number, exerciseName: string, sets: number, reps: number, weight: number) {
    this.days[index].exercises.push(new Exercise(exerciseName, sets, reps, weight));
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    return this.http.post('http://localhost:3000/api/users/days/exercises' + token, {"index": index, "exerciseName": exerciseName, "sets": sets, "reps": reps, "weight": weight}, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  deleteExercise(dayIndex: number, exerciseIndex: number) {
    this.days[dayIndex].exercises.splice(exerciseIndex, 1);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    return this.http.patch('http://localhost:3000/api/users/days/exercises' + token, {"dayIndex": dayIndex, "exerciseIndex": exerciseIndex}, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
