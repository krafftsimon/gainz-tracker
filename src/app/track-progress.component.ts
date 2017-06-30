import { Component, Input, ElementRef } from '@angular/core';

import { DropdownModule } from 'ngx-dropdown';

import { Day } from './day';
import { DAYS } from './day-list';
import { Exercise } from './exercise';


@Component({
  selector: 'track-progress-page',
  templateUrl: './track-progress.component.html',
  styleUrls: ['./track-progress.component.css']
})
export class TrackProgressComponent {
  @Input() index: number;
  totalNumDays: number = 1;
  days: Day[] = DAYS;
  exercises: Exercise[] = [{id: 3, name: "bench"}];


  addNewDay(index: number): void {
    this.days.push(new Day(this.totalNumDays + 1, "mardi"));
    this.totalNumDays++;
  }
  addNewExercise(): void {
    this.exercises.push(new Exercise(2, "bench"));
  }


  toggleMenu(index: number): void{
    var menus = document.getElementsByClassName('openMenu');
    var subMenus = document.getElementsByClassName('openSubMenu');
    if(!document.getElementsByClassName('dropdown-menu')[index].classList.contains('openMenu') && menus.length > 0) {
          document.getElementsByClassName('active')[0].classList.remove('active');
          document.getElementsByClassName('openMenu')[0].classList.remove('openMenu');
          if (subMenus.length > 0) {
            document.getElementsByClassName('openSubMenu')[0].classList.remove('openSubMenu');
          }
          document.getElementsByClassName('dropdown-menu')[index].classList.add('openMenu');
          document.getElementsByClassName('newExercise')[index].classList.add('active');
    } else if (document.getElementsByClassName('dropdown-menu')[index].classList.contains('openMenu')) {
      document.getElementsByClassName('dropdown-menu')[index].classList.remove('openMenu');
      document.getElementsByClassName('newExercise')[index].classList.remove('active');
      document.getElementsByClassName('openSubMenu')[0].classList.remove('openSubMenu');
    } else {
      document.getElementsByClassName('dropdown-menu')[index].classList.add('openMenu');
      document.getElementsByClassName('newExercise')[index].classList.add('active');
    }

  }

  toggleMenu2(index: number): void{
    var menus = document.getElementsByClassName('openSubMenu');
    if(!document.getElementsByClassName('submenu-arms')[index].classList.contains('openSubMenu') && menus.length > 0) {
          document.getElementsByClassName('openSubMenu')[0].classList.remove('openSubMenu');
          document.getElementsByClassName('submenu-arms')[index].classList.add('openSubMenu');
    } else if (document.getElementsByClassName('submenu-arms')[index].classList.contains('openSubMenu')) {
      document.getElementsByClassName('submenu-arms')[index].classList.remove('openSubMenu');
    } else {
      document.getElementsByClassName('submenu-arms')[index].classList.add('openSubMenu');
    }
  }

  toggleMenu3(index: number): void{
    var menus = document.getElementsByClassName('openSubMenu');
    if(!document.getElementsByClassName('submenu-shoulders')[index].classList.contains('openSubMenu') && menus.length > 0) {
          document.getElementsByClassName('openSubMenu')[0].classList.remove('openSubMenu');
          document.getElementsByClassName('submenu-shoulders')[index].classList.add('openSubMenu');
    } else if (document.getElementsByClassName('submenu-shoulders')[index].classList.contains('openSubMenu')) {
      document.getElementsByClassName('submenu-shoulders')[index].classList.remove('openSubMenu');
    } else {
      document.getElementsByClassName('submenu-shoulders')[index].classList.add('openSubMenu');
    }
  }

  toggleMenu4(index: number): void{
    var menus = document.getElementsByClassName('openSubMenu');
    if(!document.getElementsByClassName('submenu-chest')[index].classList.contains('openSubMenu') && menus.length > 0) {
          document.getElementsByClassName('openSubMenu')[0].classList.remove('openSubMenu');
          document.getElementsByClassName('submenu-chest')[index].classList.add('openSubMenu');
    } else if (document.getElementsByClassName('submenu-chest')[index].classList.contains('openSubMenu')) {
      document.getElementsByClassName('submenu-chest')[index].classList.remove('openSubMenu');
    } else {
      document.getElementsByClassName('submenu-chest')[index].classList.add('openSubMenu');
    }

  }

  toggleMenu5(index: number): void{
    var menus = document.getElementsByClassName('openSubMenu');
    if(!document.getElementsByClassName('submenu-back')[index].classList.contains('openSubMenu') && menus.length > 0) {
          document.getElementsByClassName('openSubMenu')[0].classList.remove('openSubMenu');
          document.getElementsByClassName('submenu-back')[index].classList.add('openSubMenu');
    } else if (document.getElementsByClassName('submenu-back')[index].classList.contains('openSubMenu')) {
      document.getElementsByClassName('submenu-back')[index].classList.remove('openSubMenu');
    } else {
      document.getElementsByClassName('submenu-back')[index].classList.add('openSubMenu');
    }

  }

  toggleMenu6(index: number): void{
    var menus = document.getElementsByClassName('openSubMenu');
    if(!document.getElementsByClassName('submenu-core')[index].classList.contains('openSubMenu') && menus.length > 0) {
          document.getElementsByClassName('openSubMenu')[0].classList.remove('openSubMenu');
          document.getElementsByClassName('submenu-core')[index].classList.add('openSubMenu');
    } else if (document.getElementsByClassName('submenu-core')[index].classList.contains('openSubMenu')) {
      document.getElementsByClassName('submenu-core')[index].classList.remove('openSubMenu');
    } else {
      document.getElementsByClassName('submenu-core')[index].classList.add('openSubMenu');
    }
  }

  toggleMenu7(index: number): void{
    var menus = document.getElementsByClassName('openSubMenu');
    if(!document.getElementsByClassName('submenu-lowerbody')[index].classList.contains('openSubMenu') && menus.length > 0) {
          document.getElementsByClassName('openSubMenu')[0].classList.remove('openSubMenu');
          document.getElementsByClassName('submenu-lowerbody')[index].classList.add('openSubMenu');
    } else if (document.getElementsByClassName('submenu-lowerbody')[index].classList.contains('openSubMenu')) {
      document.getElementsByClassName('submenu-lowerbody')[index].classList.remove('openSubMenu');
    } else {
      document.getElementsByClassName('submenu-lowerbody')[index].classList.add('openSubMenu');
    }
  }
}
