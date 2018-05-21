export class Exercise {
  name: string;
  sets: number;
  reps: number;
  weight: number;

  constructor (str: string, sets: number, reps: number, weight: number) {
    this.name = str;
    this.sets = sets;
    this.reps = reps;
    this.weight = weight;
  }
}
