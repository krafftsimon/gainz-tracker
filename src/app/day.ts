import { Exercise } from './exercise'

export class Day {
  date: Date;
  exercises: Exercise[] = [];

  constructor (date: Date, exercise?: Exercise) {
    this.date = date;
    this.exercises.unshift(exercise);
  }
}
