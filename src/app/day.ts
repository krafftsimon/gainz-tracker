import { Exercise } from './exercise'

export class Day {
  id: number;
  date: string;
  exercises: Exercise[];

  constructor(num: number, str: string) {
    this.id = num;
    this.date = str;
    this.exercises = [{id: 1, name: "example"}];
  }

  pushExercise(num: number, str: string): void {
    this.exercises.push(new Exercise(num, str));
  }
}
