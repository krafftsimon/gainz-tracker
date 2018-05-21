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
    let openedMenus = document.getElementsByClassName("openMenu");
    let openedSubMenus = document.getElementsByClassName("openSubMenu");
    if (openedMenus.length > 0
      && targ !== "bodypart"
      && targ !== "newExercise menuActive"
      && targ !== "bodypart subMenuActive"
      && targ !== "newExercise"
      && targ !== "trans-layer"){

      document.getElementsByClassName('openMenu')[0].classList.remove('openMenu');
      document.getElementsByClassName('menuActive')[0].classList.remove('menuActive');
      if (openedSubMenus.length > 0) {
        document.getElementsByClassName('openSubMenu')[0].classList.remove('openSubMenu');
        document.getElementsByClassName('subMenuActive')[0].classList.remove('subMenuActive');
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
        this.dayService.addExercise(index,
                                    this.exerciseToBeAdded,
                                    Number(sets.value),
                                    Number(reps.value),
                                    Number(weight.value))
                        .subscribe(
                          data => console.log(data.message),
                          error => console.error(error)
                        );
      } else {
        this.days[index].exercises.push(new Exercise(this.exerciseToBeAdded,
                                                     Number(sets.value),
                                                     Number(reps.value),
                                                     Number(weight.value)));
      }
      document.getElementsByClassName('details')[index].classList.remove('detailsActive');
      sets.value = null;
      reps.value = null;
      weight.value = null;
    }
  }

  closeDetailsMenu(): void {
    document.getElementsByClassName('detailsActive')[0].classList.remove('detailsActive');
  }

  openDetails(index: number, exerciseName: string): void {
    this.exerciseToBeAdded = exerciseName;
    document.getElementsByClassName('subMenuActive')[0].classList.remove('subMenuActive');
    document.getElementsByClassName('openSubMenu')[0].classList.remove('openSubMenu');
    document.getElementsByClassName('details')[index].classList.toggle('detailsActive');
  }

  toggleMenu(index: number): void{
    console.log("asd")
    let openedMenus = document.getElementsByClassName('openMenu');
    let openedSubMenus = document.getElementsByClassName('openSubMenu');
    let openedDetailsMenu = document.getElementsByClassName('detailsActive');
    if (openedMenus.length > 0 ) {
      document.getElementsByClassName('menuActive')[0].classList.remove('menuActive');
      document.getElementsByClassName('openMenu')[0].classList.remove('openMenu');
    }
    
    
    document.getElementsByClassName('dropdown-menu')[index].classList.toggle('openMenu');
    document.getElementsByClassName('newExercise')[index].classList.toggle('menuActive');
  }

  toggleSubMenu(index: number, subMenu: string) {
    let openedSubMenus = document.getElementsByClassName('openSubMenu')
    if (openedSubMenus.length > 0 ) {
      document.getElementsByClassName('subMenuActive')[0].classList.remove('subMenuActive');
      document.getElementsByClassName('openSubMenu')[0].classList.remove('openSubMenu');
    }
    document.getElementsByClassName(subMenu)[index].classList.toggle('openSubMenu');
    switch(subMenu) {
      case "submenu-arms": {
        document.getElementsByClassName('bodypart')[index * 6 + 0].classList.toggle('subMenuActive');
        break;
      }
      case "submenu-shoulders": {
        document.getElementsByClassName('bodypart')[index * 6 + 1].classList.toggle('subMenuActive');
        break;
      }
      case "submenu-chest": {
        document.getElementsByClassName('bodypart')[index * 6 + 2].classList.toggle('subMenuActive');
        break;
      }
      case "submenu-back": {
        document.getElementsByClassName('bodypart')[index * 6 + 3].classList.toggle('subMenuActive');
        break;
      }
      case "submenu-core": {
        document.getElementsByClassName('bodypart')[index * 6 + 4].classList.toggle('subMenuActive');
        break;
      }
      case "submenu-lowerbody": {
        document.getElementsByClassName('bodypart')[index * 6 + 5].classList.toggle('subMenuActive');
        break;
      }
    }
  }
}
