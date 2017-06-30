import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private router: Router) {}

  gotoProgram(): void {
    this.router.navigate(['/program-generator']);
  }
  gotoTracking(): void {
    this.router.navigate(['/track-progress']);
  }

}
