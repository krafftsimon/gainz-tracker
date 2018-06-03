import { Component, OnInit} from '@angular/core';

import { fadeInRouterAnimation } from './../animations/fade-in-router.animation';
import { fadeInErrorAnimation } from './../animations/fade-in-error.animation';
import { Day } from './../models/day';
import { DayService } from './../services/day.service';


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
  lineChartData:Array<any> = [
    {data: [40, 41, 42, 43, 44, 45, 46], label: 'Bench'}
  ];
  lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          gridLines: {
            lineWidth: 1,
            color: 'rgba(200, 200, 200, 0.5)',
            zeroLineWidth: 2,
            zeroLineColor: 'rgba(255, 255, 255, 1)'
          },
          ticks: {
            fontColor: '#ededed',
            fontSize: window.innerWidth > 600 ? 20 : 12,
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            lineWidth: 1,
            color: 'rgba(200, 200, 200, 0.5)',
            zeroLineWidth: 2,
            zeroLineColor: 'rgba(255, 255, 255, 1)'
          },
          ticks: {
            fontColor: '#ededed',
            fontSize: window.innerWidth > 600 ? 20 : 12,
          }
        }
      ]
    }
  };
  lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(38,41,99,0.5)',
      borderColor: '#ff0048',
      pointBackgroundColor: 'rgba(255,255,255,1)',
      pointBorderColor: '#fff',
      pointRadius: 5,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      pointHoverRadius: 10,
    }
  ];
  lineChartLegend:boolean = false;
  lineChartType:string = 'line';

  constructor(private dayService: DayService) {
  }

  ngOnInit() {
    this.dayService.getDays().subscribe(
      (data: Day[]) => this.days = data,
      error => console.error(error),
      () => this.generateGraphData()
    );
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
      let newDate = this.month[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
      this.lineChartData[0].data.push(point.rm);
      this.lineChartLabels.push(newDate);
    }
  }
}
