import { Component } from '@angular/core';

import { fadeInRouterAnimation } from './../animations/fade-in-router.animation';
import { Program } from './../models/program';
import { PROGRAMS } from './../models/program-list'

@Component({
  selector: 'program-gen-page',
  templateUrl: './program-generator.component.html',
  styleUrls: ['./program-generator.component.css'],
  animations: [fadeInRouterAnimation],
  host: { '[@fadeInRouterAnimation]': 'true',
  '[style.display]': "'block'" }
})
export class ProgramGeneratorComponent {
  selectedProgram: Program;
  programs = PROGRAMS;

  program531State: string = 'out';
  program531Active: boolean = false;

  benchReps: number;
  benchWeight: number;

  squatReps: number;
  squatWeight: number;

  deadliftReps: number;
  deadliftWeight: number;

  ohpReps: number;
  ohpWeight: number;

  bench1rm: number;
  squat1rm: number;
  deadlift1rm: number;
  ohp1rm: number;

  bench90of1rm: number;
  squat90of1rm: number;
  deadlift90of1rm: number;
  ohp90of1rm: number;

  bench40: number; bench50: number; bench60: number; bench65: number; bench70: number; bench75: number; bench80: number; bench85: number; bench90: number; bench95: number;
  squat40: number; squat50: number; squat60: number; squat65: number; squat70: number; squat75: number; squat80: number; squat85: number; squat90: number; squat95: number;
  deadlift40: number; deadlift50: number; deadlift60: number; deadlift65: number; deadlift70: number; deadlift75: number; deadlift80: number; deadlift85: number; deadlift90: number; deadlift95: number;
  ohp40: number; ohp50: number; ohp60: number; ohp65: number; ohp70: number; ohp75: number; ohp80: number; ohp85: number; ohp90: number; ohp95: number;

  update1rmBench(): void {
    setTimeout(() => {this.bench1rm = this.benchWeight * (1 + this.benchReps/30)}, 200);
  }

  update1rmSquat(): void {
    setTimeout(() => {this.squat1rm = this.squatWeight * (1 + this.squatReps/30)}, 200);
  }

  update1rmDeadlift(): void {
    setTimeout(() => {this.deadlift1rm = this.deadliftWeight * (1 + this.deadliftReps/30)}, 200);
  }

  update1rmOHP(): void {
    setTimeout(() => {this.ohp1rm = this.ohpWeight * (1 + this.ohpReps/30)}, 200);
  }

  is531Active(): string {
    if(this.program531Active) {
      return "block";
    } else {
      return "none";
    }
  }

  onSelect(program: Program): void {
    switch(program.name) {
      case "5/3/1": {
        this.program531State = 'in'
        this.program531Active = true;
        break;
      }
    }
    this.calcWeights();
    this.selectedProgram = program;
  }

  calcWeights() {
    this.bench90of1rm = this.bench1rm * 0.90;
    this.squat90of1rm = this.squat1rm * 0.90;
    this.deadlift90of1rm = this.deadlift1rm * 0.90;
    this.ohp90of1rm = this.ohp1rm * 0.90;

    this.bench40 = this.bench90of1rm * 0.40;
    this.bench50 = this.bench90of1rm * 0.50;
    this.bench60 = this.bench90of1rm * 0.60;
    this.bench65 = this.bench90of1rm * 0.65;
    this.bench70 = this.bench90of1rm * 0.70;
    this.bench75 = this.bench90of1rm * 0.75;
    this.bench80 = this.bench90of1rm * 0.80;
    this.bench85 = this.bench90of1rm * 0.85;
    this.bench90 = this.bench90of1rm * 0.90;
    this.bench95 = this.bench90of1rm * 0.95;

    this.squat40 = this.squat90of1rm * 0.40;
    this.squat50 = this.squat90of1rm * 0.50;
    this.squat60 = this.squat90of1rm * 0.60;
    this.squat65 = this.squat90of1rm * 0.65;
    this.squat70 = this.squat90of1rm * 0.70;
    this.squat75 = this.squat90of1rm * 0.75;
    this.squat80 = this.squat90of1rm * 0.80;
    this.squat85 = this.squat90of1rm * 0.85;
    this.squat90 = this.squat90of1rm * 0.90;
    this.squat95 = this.squat90of1rm * 0.95;

    this.deadlift40 = this.deadlift90of1rm * 0.40;
    this.deadlift50 = this.deadlift90of1rm * 0.50;
    this.deadlift60 = this.deadlift90of1rm * 0.60;
    this.deadlift65 = this.deadlift90of1rm * 0.65;
    this.deadlift70 = this.deadlift90of1rm * 0.70;
    this.deadlift75 = this.deadlift90of1rm * 0.75;
    this.deadlift80 = this.deadlift90of1rm * 0.80;
    this.deadlift85 = this.deadlift90of1rm * 0.85;
    this.deadlift90 = this.deadlift90of1rm * 0.90;
    this.deadlift95 = this.deadlift90of1rm * 0.95;

    this.ohp40 = this.ohp90of1rm * 0.40;
    this.ohp50 = this.ohp90of1rm * 0.50;
    this.ohp60 = this.ohp90of1rm * 0.60;
    this.ohp65 = this.ohp90of1rm * 0.65;
    this.ohp70 = this.ohp90of1rm * 0.70;
    this.ohp75 = this.ohp90of1rm * 0.75;
    this.ohp80 = this.ohp90of1rm * 0.80;
    this.ohp85 = this.ohp90of1rm * 0.85;
    this.ohp90 = this.ohp90of1rm * 0.90;
    this.ohp95 = this.ohp90of1rm * 0.95;
  }
}
