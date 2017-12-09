import { Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import { Chart } from 'chart.js';

import { fadeInRouterAnimation } from './animations/fade-in-router.animation';
import { fadeInErrorAnimation } from './animations/fade-in-error.animation';
import { Day } from './day';
import { DayService } from './day.service';


@Component({
  selector: 'graph-page',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
  animations: [fadeInRouterAnimation, fadeInErrorAnimation],
  host: { '[@fadeInRouterAnimation]': 'true',
  '[style.display]': "'block'" }
})

export class GraphComponent implements OnInit {

  days: Day[] = [];
  notEnoughDataErr: boolean = false;
  benchArray: { rm: number, date: Date }[] = [];
  squatArray: { rm: number, date: Date }[] = [];
  deadliftArray: { rm: number, date: Date }[] = [];
  ohpArray: { rm: number, date: Date }[] = [];
  month: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

  // lineChart
  public lineChartData:Array<any> = [
    {data: [40, 41, 42, 43, 44, 45, 46], label: 'Bench'}
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {responsive: true,
                                scales: {
                                  xAxes: [{
                                    gridLines: {
                                      lineWidth: 1,
                                      color: 'rgba(200, 200, 200, 0.5)',
                                      zeroLineWidth: 2,
                                      zeroLineColor: 'rgba(255, 255, 255, 1)'
                                    },
                                    ticks: {
                                      fontColor: '#ededed'
                                    }
                                  }],
                                  yAxes: [{
                                    gridLines: {
                                      lineWidth: 1,
                                      color: 'rgba(200, 200, 200, 0.5)',
                                      zeroLineWidth: 2,
                                      zeroLineColor: 'rgba(255, 255, 255, 1)'
                                    },
                                    ticks: {
                                      fontColor: '#ededed'
                                    }
                                  }]
                                }
                              };

  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(19, 73, 81, 0.2)',
      borderColor: 'rgba(59, 168, 204, 1)',
      pointBackgroundColor: 'rgba(255,255,255,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = false;
  public lineChartType:string = 'line';

  constructor(private dayService: DayService) {}

  ngOnInit() {
    this.dayService.getDays().subscribe((data: Day[]) => this.days = data,
                                            error => console.error(error),
                                          () => this.generateGraphData());

  }

  generateGraphData() {
    for (let day of this.days) {
      for (let exercise of day.exercises) {
        switch (exercise.name) {
          case "Bench Press": {
            let bench1rm = exercise.weight * (1 + exercise.reps / 30);
            this.benchArray.unshift({"rm": bench1rm, "date": day.date});
            break;
          }
          case "Squats": {
            let squat1rm = exercise.weight * (1 + exercise.reps / 30);
            this.squatArray.unshift({"rm": squat1rm, "date": day.date});
            break;
          }
          case "Deadlifts": {
            let deadlift1rm = exercise.weight * (1 + exercise.reps / 30);
            this.deadliftArray.unshift({"rm": deadlift1rm, "date": day.date});
            break;
          }
          case "OHP": {
            let ohp1rm = exercise.weight * (1 + exercise.reps / 30);
            this.ohpArray.unshift({"rm": ohp1rm, "date": day.date});
            break;
          }
        }
      }
    }
  }

  generateGraph(exercise: string) {
    let exerciseArray;
    switch (exercise) {
      case 'Bench Press': {
        exerciseArray = this.benchArray;
        break;
      }
      case 'Squat': {
        exerciseArray = this.squatArray;
        break;
      }
      case 'Deadlift': {
        exerciseArray = this.deadliftArray;
        break;
      }
      case 'Overhead Press': {
        exerciseArray = this.ohpArray;
        break;
      }
    }
    if (exerciseArray.length < 4) {
      this.notEnoughDataErr = true;
      return;
    }
    this.notEnoughDataErr = false;
    this.lineChartData[0].data = [];
    this.lineChartData[0].label = exercise;
    this.lineChartLabels = [];
    for (let point of exerciseArray) {
      let d = new Date(point.date)
      let newDate = this.month[d.getMonth()] + ' ' + d.getDay() + ', ' + d.getFullYear();
      this.lineChartData[0].data.push(point.rm);
      this.lineChartLabels.push(newDate);
    }
  }
}
