import { Component, HostListener, ViewChild, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { fadeInModalAnimation } from './animations/fade-in-modal.animation';
import { slideInModalContentAnimation } from './animations/slide-in-modal-content.animation';
import { slideModalFormAnimation } from './animations/slide-modal-form.animation';
import { User } from './user';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInModalAnimation, slideInModalContentAnimation, slideModalFormAnimation]
})

export class AppComponent implements OnInit {
  title = 'app';
  modalActive: boolean = false;
  loginFormActive: boolean = true;
  registerFormActive: boolean = false;
  modalState: string = 'out';
  loginFormState: string = 'in';
  registerFormState: string = 'out';
  myLoginForm: FormGroup;
  myRegisterForm: FormGroup;

  constructor(private authService: AuthService){}

  @HostListener('document:click', ['$event'])
  onClick(event) {
    var clickTarget = event.target.attributes.id;
    if (clickTarget !== undefined) {
      if (clickTarget.nodeValue === "login-modal") {
        this.modalActive = false;
        this.modalState = 'out';
      }
    }
  }

  ngOnInit() {
    var emailVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.myRegisterForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.pattern(emailVal)])
    })
    this.myLoginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  onSubmitLogin(): void {
    const user = new User(this.myLoginForm.value.username,
                          this.myLoginForm.value.password);
    this.authService.login(user).subscribe(data => { localStorage.setItem('token', data.token);
                                                     localStorage.setItem('userId', data.userId);
                                                     console.log(data);
                                                     window.location.reload();},
                                            error => console.error(error));
    this.myLoginForm.reset();
    this.modalActive = false;
    this.modalState = 'out';
  }

  onSubmitRegister(): void {
    const user = new User(this.myRegisterForm.value.username,
                          this.myRegisterForm.value.password,
                          this.myRegisterForm.value.email);
    this.authService.register(user).subscribe(data => console.log(data),
                                              error => console.error(error));
    this.myRegisterForm.reset();
    this.modalActive = false;
    this.modalState = 'out';
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  onLogout() {
    this.authService.logout();
    window.location.reload();
  }

  isModalActive(): string {
    if(this.modalActive) {
      return "block";
    } else {
      return "none";
    }
  }

  isLoginFormActive(): string {
    if(this.loginFormActive) {
      return "block";
    } else {
      return "none";
    }
  }

  isRegisterFormActive(): string {
    if(this.registerFormActive) {
      return "block";
    } else {
      return "none";
    }
  }
}
