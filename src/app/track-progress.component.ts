import { Component, Input, ElementRef, HostListener } from '@angular/core';

import { DropdownModule } from 'ngx-dropdown';

import { Day } from './day';
import { DAYS } from './day-list';
import { Exercise } from './exercise';


@Component({
  selector: 'track-progress-page',
  templateUrl: './track-progress.component.html',
  styleUrls: ['./track-progress.component.css'],
})
export class TrackProgressComponent {
  @Input() index: number;
  totalNumDays: number = 1;
  days: Day[] = DAYS;

  constructor(private eref: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClick(event) {
    let test = document.getElementsByClassName('bodypart');
    let targ = event.target.attributes.class.nodeValue;
    let openedMenus = document.getElementsByClassName("openMenu");
    let openedSubMenus = document.getElementsByClassName("openSubMenu");
    if (openedMenus.length > 0 && targ !== "bodypart" && targ !== "newExercise menuActive" && targ !== "bodypart subMenuActive" && targ !== "newExercise"){

      document.getElementsByClassName('openMenu')[0].classList.remove('openMenu');
      document.getElementsByClassName('menuActive')[0].classList.remove('menuActive');
      if (openedSubMenus.length > 0) {
        document.getElementsByClassName('openSubMenu')[0].classList.remove('openSubMenu');
        document.getElementsByClassName('subMenuActive')[0].classList.remove('subMenuActive');
      }
    }
  }


  addNewDay(index: number): void {
    this.days.push(new Day(this.totalNumDays + 1, "mardi"));
    this.totalNumDays++;
  }
  addNewExercise(index: number): void {
    this.days[index].exercises.push(new Exercise(1, "bench"));
  }


  toggleMenu(index: number): void{
    let openedMenus = document.getElementsByClassName('openMenu')
    let openedSubMenus = document.getElementsByClassName('openSubMenu')
    if (openedMenus.length > 0 ) {
      document.getElementsByClassName('menuActive')[0].classList.remove('menuActive');
      document.getElementsByClassName('openMenu')[0].classList.remove('openMenu');
    }
    if (openedSubMenus.length > 0 ) {
      document.getElementsByClassName('subMenuActive')[0].classList.remove('subMenuActive');
      document.getElementsByClassName('openSubMenu')[0].classList.remove('openSubMenu');
    }
    document.getElementsByClassName('dropdown-menu')[index].classList.toggle('openMenu');
    document.getElementsByClassName('newExercise')[index].classList.toggle('menuActive');
  }

  toggleMenu2(index: number): void{
    let openedSubMenus = document.getElementsByClassName('openSubMenu')
    if (openedSubMenus.length > 0 ) {
      document.getElementsByClassName('subMenuActive')[0].classList.remove('subMenuActive');
      document.getElementsByClassName('openSubMenu')[0].classList.remove('openSubMenu');
    }
    document.getElementsByClassName('submenu-arms')[index].classList.toggle('openSubMenu');
    document.getElementsByClassName('bodypart')[index * 6 + 0].classList.toggle('subMenuActive');
  }

  toggleMenu3(index: number): void{
    let openedSubMenus = document.getElementsByClassName('openSubMenu')
    if (openedSubMenus.length > 0 ) {
      document.getElementsByClassName('subMenuActive')[0].classList.remove('subMenuActive');
      document.getElementsByClassName('openSubMenu')[0].classList.remove('openSubMenu');
    }
    document.getElementsByClassName('submenu-shoulders')[index].classList.toggle('openSubMenu');
    document.getElementsByClassName('bodypart')[index * 6 + 1].classList.toggle('subMenuActive');
  }

  toggleMenu4(index: number): void{
    let openedSubMenus = document.getElementsByClassName('openSubMenu')
    if (openedSubMenus.length > 0 ) {
      document.getElementsByClassName('subMenuActive')[0].classList.remove('subMenuActive');
      document.getElementsByClassName('openSubMenu')[0].classList.remove('openSubMenu');
    }
    document.getElementsByClassName('submenu-chest')[index].classList.toggle('openSubMenu');
    document.getElementsByClassName('bodypart')[index * 6 + 2].classList.toggle('subMenuActive');
  }

  toggleMenu5(index: number): void{
    let openedSubMenus = document.getElementsByClassName('openSubMenu')
    if (openedSubMenus.length > 0 ) {
      document.getElementsByClassName('subMenuActive')[0].classList.remove('subMenuActive');
      document.getElementsByClassName('openSubMenu')[0].classList.remove('openSubMenu');
    }
    document.getElementsByClassName('submenu-back')[index].classList.toggle('openSubMenu');
    document.getElementsByClassName('bodypart')[index * 6 + 3].classList.toggle('subMenuActive');
  }

  toggleMenu6(index: number): void{
    let openedSubMenus = document.getElementsByClassName('openSubMenu')
    if (openedSubMenus.length > 0 ) {
      document.getElementsByClassName('subMenuActive')[0].classList.remove('subMenuActive');
      document.getElementsByClassName('openSubMenu')[0].classList.remove('openSubMenu');
    }
    document.getElementsByClassName('submenu-core')[index].classList.toggle('openSubMenu');
    document.getElementsByClassName('bodypart')[index * 6 + 4].classList.toggle('subMenuActive');
  }

  toggleMenu7(index: number): void{
    let openedSubMenus = document.getElementsByClassName('openSubMenu')
    if (openedSubMenus.length > 0 ) {
      document.getElementsByClassName('subMenuActive')[0].classList.remove('subMenuActive');
      document.getElementsByClassName('openSubMenu')[0].classList.remove('openSubMenu');
    }
    document.getElementsByClassName('submenu-lowerbody')[index].classList.toggle('openSubMenu');
    document.getElementsByClassName('bodypart')[index * 6 + 5].classList.toggle('subMenuActive');
  }
}
