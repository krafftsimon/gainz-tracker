import { Component, Input, ElementRef, HostListener, OnInit } from '@angular/core';

import { fadeInRouterAnimation } from './../animations/fade-in-router.animation';
import { dayListAnimation } from './../animations/day-list.animation';
import { exerciseListAnimation } from './../animations/exercise-list.animation';
import { dropdownMenuAnimation } from './../animations/dropdown-menu.animation';
import { Day } from './../models/day';
import { DAYS } from './../models/day-list';
import { Exercise } from './../models/exercise';
import { DayService } from './../services/day.service';
import { AuthService } from './../services/auth.service';


@Component({
  selector: 'track-progress-page',
  templateUrl: './track-progress.component.html',
  styleUrls: ['./track-progress.component.css'],
  animations: [fadeInRouterAnimation, dayListAnimation, exerciseListAnimation, dropdownMenuAnimation],
  host: { '[@fadeInRouterAnimation]': 'true',
  '[style.display]': "'block'" }
})
export class TrackProgressComponent implements OnInit {
  @Input() index: number;
  totalNumDays: number = 1;
  days: Day[] = [];
  exerciseToBeAdded: string;
  detailsMenuInputValue: string = null;
  loggedIn: boolean = false;

  constructor(
    private eref: ElementRef,
    private dayService: DayService,
    private authService: AuthService) {}

  @HostListener('document:click', ['$event'])
  onClick(event) {
    let test = document.getElementsByClassName('bodypart');
    let targ = event.target.attributes.class.nodeValue;
    let openedMenus = document.getElementsByClassName("open-menu");
    let openedSubMenus = document.getElementsByClassName("open-sub-menu");
    if (openedMenus.length > 0
      && targ !== "bodypart"
      && targ !== "new-exercise menu-active"
      && targ !== "bodypart sub-menu-active"
      && targ !== "new-exercise"
      && targ !== "trans-layer"){

      document.getElementsByClassName('open-menu')[0].classList.remove('open-menu');
      document.getElementsByClassName('menu-active')[0].classList.remove('menu-active');
      if (openedSubMenus.length > 0) {
        document.getElementsByClassName('open-sub-menu')[0].classList.remove('open-sub-menu');
        document.getElementsByClassName('sub-menu-active')[0].classList.remove('sub-menu-active');
      }
    }
  }


  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.loggedIn = true;
      this.dayService.getDays().subscribe(
        days => this.days = days,
        error => console.error(error)
      );
    }
  }

  addNewDay(): void {
    if (this.authService.isLoggedIn()) {
      this.dayService.addNewDay().subscribe(
        data => console.log(data.message),
        error => console.error(error)
      );
    } else {
      let exercise = new Exercise('Example Exercise', 2, 10, 185);
      this.days.unshift(new Day(new Date(), exercise));
    }
  }

  deleteDay(index: number): void {
    if (this.authService.isLoggedIn()) {
      this.dayService.deleteDay(index).subscribe(
        data => console.log(data.message),
        error => console.error(error)
      );
    } else {
     this.days.splice(index, 1);
    }
  }

  deleteExercise(dayIndex: number, exerciseIndex: number): void {
    if (this.authService.isLoggedIn()) {
      this.dayService.deleteExercise(dayIndex, exerciseIndex).subscribe(
        data => console.log(data.message),
        error => console.error(error)
      );
    } else {
      this.days[dayIndex].exercises.splice(exerciseIndex, 1);
    }
  }

  submitDetails(index: number, sets: HTMLInputElement, reps: HTMLInputElement, weight: HTMLInputElement): void {
    if (sets.value !== '' && reps.value !== '' && weight.value !== '') {
      if (this.authService.isLoggedIn()) {
        this.dayService.addExercise(
          index,
          this.exerciseToBeAdded,
          Number(sets.value),
          Number(reps.value),
          Number(weight.value)
        )
        .subscribe(
          data => console.log(data.message),
          error => console.error(error)
        );
      } else {
        let newExercise = new Exercise(
          this.exerciseToBeAdded,
          Number(sets.value),
          Number(reps.value),
          Number(weight.value)
        );
        this.days[index].exercises.push(newExercise);
      }
      document.getElementsByClassName('details')[index].classList.remove('details-active');
      sets.value = null;
      reps.value = null;
      weight.value = null;
    }
  }

  closeDetailsMenu(): void {
    document.getElementsByClassName('details-active')[0].classList.remove('details-active');
  }

  openDetails(index: number, exerciseName: string): void {
    this.exerciseToBeAdded = exerciseName;
    document.getElementsByClassName('sub-menu-active')[0].classList.remove('sub-menu-active');
    document.getElementsByClassName('open-sub-menu')[0].classList.remove('open-sub-menu');
    document.getElementsByClassName('details')[index].classList.toggle('details-active');
  }

  toggleMenu(index: number): void{
    let openedMenus = document.getElementsByClassName('open-menu');
    let openedSubMenus = document.getElementsByClassName('open-sub-menu');
    let openedDetailsMenu = document.getElementsByClassName('details-active');
    if (openedMenus.length > 0 ) {
      document.getElementsByClassName('menu-active')[0].classList.remove('menu-active');
      document.getElementsByClassName('open-menu')[0].classList.remove('open-menu');
    }
    
    
    document.getElementsByClassName('dropdown-menu')[index].classList.toggle('open-menu');
    document.getElementsByClassName('new-exercise')[index].classList.toggle('menu-active');
  }

  toggleSubMenu(index: number, subMenu: string) {
    let openedSubMenus = document.getElementsByClassName('open-sub-menu')
    if (openedSubMenus.length > 0 ) {
      document.getElementsByClassName('sub-menu-active')[0].classList.remove('sub-menu-active');
      document.getElementsByClassName('open-sub-menu')[0].classList.remove('open-sub-menu');
    }
    document.getElementsByClassName(subMenu)[index].classList.toggle('open-sub-menu');
    switch(subMenu) {
      case "submenu-arms": {
        document.getElementsByClassName('bodypart')[index * 6 + 0].classList.toggle('sub-menu-active');
        break;
      }
      case "submenu-shoulders": {
        document.getElementsByClassName('bodypart')[index * 6 + 1].classList.toggle('sub-menu-active');
        break;
      }
      case "submenu-chest": {
        document.getElementsByClassName('bodypart')[index * 6 + 2].classList.toggle('sub-menu-active');
        break;
      }
      case "submenu-back": {
        document.getElementsByClassName('bodypart')[index * 6 + 3].classList.toggle('sub-menu-active');
        break;
      }
      case "submenu-core": {
        document.getElementsByClassName('bodypart')[index * 6 + 4].classList.toggle('sub-menu-active');
        break;
      }
      case "submenu-lowerbody": {
        document.getElementsByClassName('bodypart')[index * 6 + 5].classList.toggle('sub-menu-active');
        break;
      }
    }
  }
}
