import { Day } from './day';
import { DAYS } from './day-list';
import { Exercise } from './exercise';


export class User {
  days: Day[];

  constructor(public username: string,
              public password: string,
              public email?: string){}
}
